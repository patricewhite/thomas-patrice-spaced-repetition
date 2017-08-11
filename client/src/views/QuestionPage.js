import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import Feedback from '../components/question/Feedback';
import '../styles/QuestionPage.css';
import * as Cookies from 'js-cookie';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.navProps = {
      profileImg: 'http://fillmurray.com/125/125',
    };
    // this.questProps = {
    //   onChange: this.props.setCurrentAnswer,
    //   onStartQuiz: (e) => console.log(e.target),
    //   result: this.props.setAnswerCheck
    // };
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
          // result={this.props.setAnswerCheck}
          // answerCheck={this.props.answerCheck}
        />

        <Feedback
          result={this.props.setAnswerCheck}
          answerCheck={this.props.answerCheck}
          currentQuestion={this.props.currentQuestion}
        />
      </div>
    );
  }
}
