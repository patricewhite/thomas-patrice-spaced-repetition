import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import '../styles/QuestionPage.css';
import * as Cookies from 'js-cookie';
import {fetchQuestions, setCurrentQuestion} from '../actions/index';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.navProps = {
      profileImg: 'http://via.placeholder.com/150x150',
    };
    this.questProps = {
      onChange: this.props.setCurrentAnswer,
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
          currentStreak={this.props.currentStreak}
          totalCorrect={this.props.totalCorrect}
          totalAnswered={this.props.totalAnswered}
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
