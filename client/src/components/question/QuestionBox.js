import React from 'react';
export default function QuestionBox(props) {
  const { currentQuestion, onChange,loadUserQuestions, userQuestions, currentAnswer, answerCheck } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    loadUserQuestions(userQuestions, currentAnswer, currentQuestion);

    onChange('');
  };

  const initialBox = (
    <div className='initial-question-container'>
      <h2 className='are-you-ready'>Are you ready to Vim?</h2>
      <button
        className='initial-box-button button'
        type='button'
        onClick={() => loadUserQuestions(null, null, currentQuestion)}
        >Let's Go!
      </button>
    </div>
  );
  const questionBox = currentQuestion => {
    if (currentQuestion) {
      return (
        <div className='current-question-container'>
          {/* <div className='question-controls'>
            <a href='#'>Previous</a>
            <a href='#'>I don't know!</a>
          </div> */}
          <h2 className='question-text'>{currentQuestion.question}</h2>
          <form
            className='answer-form'
            onSubmit={(e) => onSubmit(e)}>
            <input
              type='text'
              placeholder='Enter your answer...'
              className='answer-input'
              onChange={(e) => onChange(e.target.value)}
              value={currentAnswer}
            />
            <button
              className='button submit-answer-button'
              type='submit'>
              Submit
            </button>
          </form>
          <div  />
        </div>
      );
    }
    else return;
  };
  return (
    <div className='questions-container'>
      {currentQuestion ? questionBox(currentQuestion) : initialBox}
    </div>
  );
}
