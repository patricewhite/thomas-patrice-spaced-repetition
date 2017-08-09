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

  fetchQuestions() {
    this.props.dispatch(actions.fetchQuestions(this.props.accessToken));
  }
  loadUserQuestions(initialList, currentDll, userAnswer, currentQuestion) {
    this.props.dispatch(actions.loadUserQuestions(initialList, currentDll, userAnswer, currentQuestion));
  }

  render() {
    if (!this.props.currentUser) {
      return <LoginPage />;
    }

    return (
      <QuestionPage
        fetchQuestions={() => this.fetchQuestions()}
        loadUserQuestions={(initialList, currentDll, userAnswer, currentQuestion) => this.loadUserQuestions(initialList, currentDll, userAnswer, currentQuestion)}
        currentQuestion={this.props.currentQuestion}
        
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    dbQuestions: state.dbQuestions,
    userQuestions: state.userQuestions,
    currentQuestion: state.userQuestions,
    currentAnswer: state.currentAnswer,
    totalCorrect: state.totalCorrect,
    totalAnswered: state.totalAnswered,
    currentUser: state.currentUser,
    accessToken: state.accessToken
  };
};

export default connect(mapStateToProps)(App);
