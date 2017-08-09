import React from 'react';

export default function QuestionBox(props) {
  const { currentQuestion, onChange, onSubmit } = props;
  const initialBox = (
    <div className='initial-question-container'>
      <h2>Ready to go?</h2>
      <button
        type='button'>Let's Go!
      </button>
    </div>
  );
  const questionBox = (
    <div className='current-question-container'>
      <div className='question-controls'>
        <a href='#'>Previous</a>
        <a href='#'>I don't know!</a>
      </div>
      <h2 className='question-text'>{currentQuestion}</h2>
      <form
        className='answer-form'
        onSubmit={onSubmit}>
        <input
          type='text'
          defaultValue='Enter your answer...'
          className='answer-input'
          onChange={onChange}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
  return (
    <div className='questions-container'>
      {currentQuestion ? questionBox : initialBox}
    </div>
  );
}
