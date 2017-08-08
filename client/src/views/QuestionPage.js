import React from 'react';
import * as Cookies from 'js-cookie';

export default class QuestionPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     questions: []
  //   };
  // }

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
        <div className='nav-bar-conainer'>
          <img
            src='http://via.placeholder.com/150x150'
            alt='profile'
          />
          <div className='scoreboard-container'>
            <h3>Current Streak...</h3>
            <h3>Total Score</h3>
          </div>
          <a href={'/api/auth/logout'}>Logout</a>
        </div>

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
