import React from 'react';

export default function Feedback(props) {
  console.log('seee')
  const result = () => {
    console.log(props.answerCheck);
    if(props.answerCheck === props.currentQuestion.answer){
        return ( <div className= 'results2' >
          Correct
        </div>
      )
    }else{
      return (<div className= 'results2' >
        Wrong
        Correct answer: {props.currentQuestion.answer}
      </div>
    )
    }
  }

  return (
      <div className='results2' result={() => result()}>
      </div>
  )
}
