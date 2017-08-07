import React from 'react';
import { connect } from 'react-redux';
import * as Cookies from 'js-cookie';
import * as actions from '../actions';

import QuestionPage from '../views/QuestionPage';
import LoginPage from '../views/LoginPage';

export class App extends React.Component {

  componentDidMount() {
    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      this.props.dispatch(actions.fetchUser(accessToken));
    }
  }

  render() {
    if (!this.props.currentUser) {
      return <LoginPage />;
    }

    return <QuestionPage />;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    currentUser: state.currentUser,
    accessToken: state.accessToken
  };
};

export default connect(mapStateToProps)(App);
