import React, { Component } from "react";
import ShareButtons from "./ShareButtons";
import Clouds from "./Clouds"
import "./final.css";

class FinalPage extends Component {
	render() {
		return (
		    <div className="page__content">
		        <span className="page__title">
		        	<em>выборы</em>
		        	<br/>путешествие<br/>
		        	<strong>близко!</strong>
		        </span>
		        <ShareButtons/>
		        <Clouds/>
	    	</div>
		);
	}
}

export default FinalPage;
