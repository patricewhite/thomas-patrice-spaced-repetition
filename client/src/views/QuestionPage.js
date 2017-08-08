import React from 'react';
import NavBar from '../components/nav/NavBar';
import QuestionBox from '../components/question/QuestionBox';
import * as Cookies from 'js-cookie';

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
  }

  // componentDidMount() {
  //   const accessToken = Cookies.get('accessToken');
  //   fetch('/api/questions', {
  //     headers: {
  //       'Authorization': `Bearer ${accessToken}`
  //     }
  //   }).then(res => {
  //     if (!res.ok) {
  //       throw new Error(res.statusText);
  //     }
  //     return res.json();
  //   }).then(questions =>
  //           this.setState({
  //             questions
  //           })
  //       );
  // }
  render() {
    return (
      <div className='views-questions-page'>
        <NavBar
          profileImg={this.navProps.profileImg}
          currentStreak={this.navProps.currentStreak}
          questionsCorrect={this.navProps.questionsCorrect}
          totalQuestions={this.navProps.totalQuestions}
        />

        <div className='questions-container'>
          <div className='question-controls'>
            <a href='#'>Previous</a>
            <a href='#'>I don't know!</a>
          </div>
          <h2 className='question-text'>This is a question...</h2>
          <form className='answer-form'>
            <input
              type='text'
              defaultValue='Enter your answer...'
              className='answer-input'
            />
            <button type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
