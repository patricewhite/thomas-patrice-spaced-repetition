import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <img src='http://via.placeholder.com/500x200' />
      <h1>How Do I Vim?</h1>
      <p>Learn how to more than just exit.</p>
      <a href={'/api/auth/google'}>Login with Google</a>
    </div>
  );
}
