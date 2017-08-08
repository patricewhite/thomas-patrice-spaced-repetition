import React from 'react';

export default function NavBar(props) {
  const { profileImg, currentStreak, questionsCorrect, totalQuestions } = props;
  return (
    <div className='nav-bar-conainer'>
      <img
        src={profileImg}
        alt='profile'
      />
      <div className='scoreboard-container'>
        <h3>{`Your current streak is ${currentStreak}`}</h3>
        <h3>{`Total Score: ${questionsCorrect}/${totalQuestions}`}</h3>
      </div>
      <a href={'/api/auth/logout'}>Logout</a>
    </div>
  );
}
