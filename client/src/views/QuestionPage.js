import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import '../styles/QuestionPage.css';
import * as Cookies from 'js-cookie';
import {fetchQuestions} from '../actions/index';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   questions: []
    // };
    this.navProps = {
      profileImg: 'http://via.placeholder.com/150x150',
      currentStreak: 15,
      questionsCorrect: 15,
      totalQuestions: 20
    };
    this.questProps = {
      currentQuestion: 'This is a question...',
      onChange: (e) => console.log(e.target.value),
      onSubmit: (e) => e.preventDefault()
    };
  }

  componentDidMount() {
    // currentQuestion ={this.props.fetchQuestions()};
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
          currentQuestion={this.questProps.currentQuestion}
          onChange={this.questProps.onChange}
          onSubmit={this.questProps.onSubmit}
        />
      </div>
    );
  }
}
