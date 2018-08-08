import React, { Component } from "react";
import ActionsPage from "../components/ActionsPage";
import FinalPage from "../components/FinalPage";

class Page extends Component {
	render() {
		const page =
			this.props.page === "actions" ? (
				<ActionsPage usr={this.props.usr} />
			) : (
				<FinalPage />
			);

		return (
			<div className={`app page page--${this.props.page}`}>{page}</div>
		);
	}
}

export default Page;
