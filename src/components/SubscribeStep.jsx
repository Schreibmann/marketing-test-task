import React, { Component } from 'react';
import { number, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/appContainerActions';

class SubscribeStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputValue: '',
      submitButtonIsActive: false,
    };
  }

  handleInputChange(e) {
    if (!this.props.email) {
      this.setState({
        emailInputValue: e.target.value,
      });
      this.validateEmail(e.target.value);
    }
  }

  handleSubmit() {
    this.props.updateUser(this.props.usrId, { email: this.state.emailInputValue });
  }

  validateEmail(email) {
    const isValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)); // ¯\_(ツ)_/¯

    if (isValid !== this.state.submitButtonIsActive) {
      this.setState({
        submitButtonIsActive: isValid,
      });
    }
  }

  render() {
    const submitButtonStyle = (this.props.email) ? { display: 'none' } : { display: 'contents' };
    const emailInpuStyle = (this.props.email) ? { pointerEvents: 'none' } : {};

    return (

      <div className={`page__step ${this.props.email ? 'page__step--done' : ''}`}>
        <span data-number="2." className="page__label">
Оставь почту:
        </span>
        <form noValidate="" onSubmit={this.handleSubmit.bind(this)} className="subscribe subscribe--active page__subscribe">
          <input
            style={emailInpuStyle}
            type="email"
            onChange={this.handleInputChange.bind(this)}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            className="subscribe__input"
            placeholder={this.props.email}
            value={this.state.emailInputValue}
          />
          <div style={submitButtonStyle}>
            <button
              type="submit"
              className={`subscribe__button button ${!this.state.submitButtonIsActive ? 'subscribe__button--disabled button--disabled' : null}`}
            >
              <div className="button__content">
                <span>
Отправить
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  usrId: state.usr.id,
});

SubscribeStep.propTypes = {
  email: string,
  usrId: number,
  updateUser: func.isRequired,
};

export default connect(mapStateToProps, { updateUser })(SubscribeStep);
