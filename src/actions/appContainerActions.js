import cookie from 'react-cookies';
import { CHECK_USER, UPDATE_USER } from './types';
import { API_PATH } from './path';

export const checkUser = () => (dispatch) => {
  if (!cookie.load('usrId')) {
    // если юзер на странице первый раз или почистил куки

    // запрос на создание юзера, в ответе получаем ID и сохраняем в cookie
    fetch(`${API_PATH}user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((data) => {
        cookie.save('usrId', data.id, { path: '/' });

        const usr = {
          shared: false,
          email: null,
          ...data, // {id: 123}
        };

        dispatch({
          type: CHECK_USER,
          usr,
        });
      })
      .catch((err) => {
        // show modal db connection error
      });
  } else {
    // запрос шаринга и мыла юзера по ID
    const id = cookie.load('usrId');

    fetch(`${API_PATH}user/${id}`, {
      method: 'GET',
      accept: 'application/json',
    })
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: CHECK_USER,
          usr: data.user,
        });
      })
      .catch((err) => {
        // show modal db connection error
      });
  }
};

export const updateUser = (id, data) => (dispatch) => {
  (async () => {
    const response = await fetch(`${API_PATH}user/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const content = await response.json();
    if (content.success) {
      dispatch({
        type: UPDATE_USER,
        data,
      });
    } else if (content.error) {
      // show modal db connection error
    }
  })();
};
