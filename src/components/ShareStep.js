import React, { Component } from "react";
import ShareButtons from "./ShareButtons";

class ShareStep extends Component {
	
	render() {
		return (
	        <div className={`page__step ${this.props.done ? 'page__step--done' : ''}`}>
	        	<span data-number="1." className="page__label">Поделись с&nbsp;друзьями:</span>
	            <ShareButtons isActionsPage={true}/>
	        </div>	                    
		);
	}
}

export default ShareStep;
