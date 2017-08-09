import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import '../styles/QuestionPage.css';
import * as Cookies from 'js-cookie';
import {fetchQuestions} from '../actions/index';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.navProps = {
      profileImg: 'http://via.placeholder.com/150x150',
      currentStreak: 15,
      questionsCorrect: 15,
      totalQuestions: 20
    };
    this.questProps = {
      onChange: (e) => console.log(e.target.value),
      onSubmit: (e) => e.preventDefault(),
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
          currentStreak={this.navProps.currentStreak}
          questionsCorrect={this.navProps.questionsCorrect}
          totalQuestions={this.navProps.totalQuestions}
        />

        <QuestionBox
          currentQuestion={this.props.currentQuestion}
          onChange={this.questProps.onChange}
          onSubmit={this.questProps.onSubmit}
          loadUserQuestions={this.props.loadUserQuestions}
        />
      </div>
    );
  }
}
