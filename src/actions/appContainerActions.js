import { CHECK_USER, UPDATE_USER } from "./types";
import { API_PATH } from "./path";
import cookie from "react-cookies";

export const checkUser = () => dispatch => {
	if (!cookie.load("usrId")) { // если юзер на странице первый раз или почистил куки

		// запрос на создание юзера, в ответе получаем ID и сохраняем в cookie
		fetch(`${API_PATH}adduser`, { accept: "application/json" })
			.then(res => {
				return res.json();
			})
			.then(data => {
				cookie.save("usrId", data.id, { path: "/" });

				const usr = {
					shared: false,
					email: null,
					...data // {id: 123}
				};

				dispatch({
					type: CHECK_USER,
					usr: usr
				});
			})
			.catch(err => {
				console.log(err);
			});
	} else { // запрос шаринга и мыла юзера по ID
		const id = cookie.load("usrId");

		fetch(`${API_PATH}users/${id}`, { accept: "application/json" })
			.then(res => {
				return res.json();
			})
			.then(data => {
				dispatch({
					type: CHECK_USER,
					usr: data.user
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const updateUser = (id, data) => dispatch => {
	(async () => {
		const response = await fetch(`${API_PATH}updateuser/${id}`, {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const content = await response.json();
		console.log("upd usr", content);
		if (content.success) {
			dispatch({
				type: UPDATE_USER,
				data: data
			});
		} else if (content.error) {
			console.log(content.error);
		}
	})();
};
