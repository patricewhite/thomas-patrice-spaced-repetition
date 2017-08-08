import React from 'react';

export default function QuestionBox(props) {
  const { currentQuestion, onChange, onSubmit } = props;
  return (
    <div className='questions-container'>
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
}
