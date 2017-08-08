import React from 'react';
import ContentBox from '../components/login/ContentBox';

export default function LoginPage() {
  const loginContent = {
    box1: {
      imgSrc: 'http://via.placeholder.com/250x250',
      imgAlt: 'Categories',
      title: 'Select Vim command categories to practice.'
    },
    box2: {
      imgSrc: 'http://via.placeholder.com/250x250',
      imgAlt: 'Sessions',
      title: 'Save your sessions...'
    },
    box3: {
      imgSrc: 'http://via.placeholder.com/250x250',
      imgAlt: 'Other Stuff',
      title: 'Here is some other stuff...'
    }
  };
  return (
    <div>
      <img src='http://via.placeholder.com/1300x500' alt='Hero' />
      <h1>How Do I Vim?</h1>
      <p>Learn how to more than just exit.</p>
      <div className='login-content-container'>
        <ContentBox
          imgSrc={loginContent.box1.imgSrc}
          imgAlt={loginContent.box1.imgAlt}
          title={loginContent.box1.title}
        />
        <ContentBox
          imgSrc={loginContent.box2.imgSrc}
          imgAlt={loginContent.box2.imgAlt}
          title={loginContent.box2.title}
        />
        <ContentBox
          imgSrc={loginContent.box3.imgSrc}
          imgAlt={loginContent.box3.imgAlt}
          title={loginContent.box3.title}
        />
      </div>
      <div className='login-auth-container'>
        <h3>Interested? Click below to login or signup!</h3>
        <a href={'/api/auth/google'}>Login with Google</a>
      </div>
    </div>
  );
}
