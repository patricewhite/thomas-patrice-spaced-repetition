import React from 'react';
import '../../styles/NavBar.css';


export default function NavBar(props) {
  const { profileImg, currentStreak, questionsCorrect, totalQuestions } = props;
  return (
    <div className='nav-bar-container'>
      <div className='profile-image'>
        <img
          src={profileImg}
          alt='profile'
        />
      </div>

      <div className='scoreboard-container'>
        <h3>{`Your current streak is ${currentStreak}`}</h3>
        <h3>{`Total Score: ${questionsCorrect}/${totalQuestions}`}</h3>
      </div>
      <div className='account-controls'>
        <a
          href={'/api/auth/logout'}>Logout
        </a>
      </div>

    </div>
  );
}
