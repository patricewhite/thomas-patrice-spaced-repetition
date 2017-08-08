import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <img src='http://via.placeholder.com/1300x500' alt='Hero' />
      <h1>How Do I Vim?</h1>
      <p>Learn how to more than just exit.</p>
      <div className='login-content-container'>
        <div className='login-content-box'>
          <img src='http://via.placeholder.com/250x250' alt='Categories' />
          <h3>Select Vim command categories to practice.</h3>
        </div>
        <div className='login-content-box'>
          <img src='http://via.placeholder.com/250x250' alt='Sessions' />
          <h3>Save your sessions...</h3>
        </div>
        <div className='login-content-box'>
          <img src='http://via.placeholder.com/250x250' alt='Other Stuff' />
          <h3>Here is some other stuff...</h3>
        </div>
      </div>
      <div className='login-auth-container'>
        <h3>Interested? Click below to login or signup!</h3>
        <a href={'/api/auth/google'}>Login with Google</a>
      </div>
    </div>
  );
}
