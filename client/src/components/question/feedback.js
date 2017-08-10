import React from 'react';
import QuestionPage from '.../views/QuestionPage';

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
  }
  console.log(this.props);

  componentWillUpdate() {
    console.log(currentQuestion.answer);
  }

  result () => {
    if(currentAnswer === currentQuestion.answer){
        return ( <div className= 'results2' >
          Correct
        </div>
      )
    }else{
      return (<div className= 'results2' >
        Wrong
        Correct answer: {currentQuestion.answer}
      </div>
    )
    }
  }

  render() {
    return (
        <div className='results2'>
          {result()}
        </div>
    )
  }
}
