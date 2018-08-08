import React, { Component } from "react";
import ShareStep from "../components/ShareStep";
import SubscribeStep from "../components/SubscribeStep";

class ActionsPage extends Component {

	render() {
		return (
	        <div className="page__content">
	            <div className="page__row">
	                <div className="page__col page__col--right">
	                	<span className="page__title">Чтобы выиграть<br/> путешествие</span>
	                    <ShareStep done={this.props.usr.shared}/>
	                    <SubscribeStep email={this.props.usr.email}/>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default ActionsPage;
