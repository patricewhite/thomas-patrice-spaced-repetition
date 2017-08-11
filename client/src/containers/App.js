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

  setAnswerCheck(currentAnswer, currentQuestion, correct){
    this.props.dispatch(actions.setAnswerCheck(currentAnswer, currentQuestion, correct));
  }

  setCurrentAnswer(currentAnswer){
    this.props.dispatch(actions.setCurrentAnswer(currentAnswer));
  }
  fetchQuestions() {
    this.props.dispatch(actions.fetchQuestions(this.props.accessToken));
  }
  loadUserQuestions(currentDll, userAnswer, currentQuestion) {
    this.props.dispatch(actions.loadUserQuestions(this.props.dbQuestions, currentDll, userAnswer, currentQuestion));
  }

  render() {
    if (!this.props.currentUser) {
      return <LoginPage />;
    }

    return (
        <QuestionPage
          fetchQuestions={() => this.fetchQuestions()}
          loadUserQuestions={(currentDll, userAnswer, currentQuestion) => this.loadUserQuestions(currentDll, userAnswer, currentQuestion)}
          currentQuestion={this.props.currentQuestion}
          userQuestions={this.props.userQuestions}
          currentAnswer={this.props.currentAnswer}
          setCurrentAnswer={(currentAnswer) => this.setCurrentAnswer(currentAnswer)}
          totalCorrect={this.props.totalCorrect}
          totalAnswered={this.props.totalAnswered}
          currentStreak={this.props.currentStreak}
          answerCheck={this.props.answerCheck}
          setAnswerCheck={(currentAnswer, currentQuestion, correct)=> this.setAnswerCheck(currentAnswer, currentQuestion, correct)}
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
    currentQuestion: state.currentQuestion,
    currentAnswer: state.currentAnswer,
    currentStreak: state.currentStreak,
    totalCorrect: state.totalCorrect,
    totalAnswered: state.totalAnswered,
    currentUser: state.currentUser,
    accessToken: state.accessToken,
    answerCheck: state.answerCheck
  };
};

export default connect(mapStateToProps)(App);
