import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import '../styles/QuestionPage.css';
import * as Cookies from 'js-cookie';
import {fetchQuestions, setCurrentQuestion} from '../actions/index';
import store from '../store';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.navProps = {
      profileImg: 'http://via.placeholder.com/150x150',
    };
    this.questProps = {
      onChange: this.props.setCurrentAnswer,
      onStartQuiz: (e) => console.log(e.target)
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className='views-questions-page'>
        <NavBar
          profileImg={this.navProps.profileImg}
          currentStreak={this.props.currentStreak}
          totalCorrect={this.props.totalCorrect}
          totalAnswered={this.props.totalAnswered}
        />

        <QuestionBox
          currentQuestion={this.props.currentQuestion}
          onChange={this.props.setCurrentAnswer}
          onSubmit={this.props.onSubmit}
          loadUserQuestions={this.props.loadUserQuestions}
          currentAnswer={this.props.currentAnswer}
          userQuestions={this.props.userQuestions}
        />
      </div>
    );
  }
}
