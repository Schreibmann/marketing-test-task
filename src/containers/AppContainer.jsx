import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import Clouds from '../components/Clouds';
import Page from './Page';
import { checkUser } from '../actions/appContainerActions';
import './main.css';

class AppContainer extends Component {
  componentDidMount() {
    this.props.checkUser();
  }

  render() {
    const { shared, email } = this.props.usr;
    const showFinal = shared && email;
    const page = showFinal ? 'final' : 'actions';

    return (
      <div id="app">
        <Page page={page} usr={this.props.usr} />
        <Toolbar />
        <Clouds />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usr: state.usr,
});

export default connect(mapStateToProps, { checkUser })(AppContainer);
