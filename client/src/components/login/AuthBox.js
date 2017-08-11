import React from 'react';

export default function AuthBox() {
  return (
    <div className='login-auth-container'>
      <h3>Interested? Click below to login or signup!</h3>
      <a
        className='button login-button' 
        href={'/api/auth/google'}>Login with Google</a>
    </div>
  );
}
