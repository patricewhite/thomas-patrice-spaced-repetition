import React from 'react';
import ContentBox from '../components/login/ContentBox';
import AuthBox from '../components/login/AuthBox';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const loginContent = {
    box1: {
      imgSrc: 'http://via.placeholder.com/250x250',
      imgAlt: 'Categories',
      title: 'Select categories...'
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
    <div className='views-login-page'>
      <div className='hero-container'>
        <h1 className='main-heading'>How Do I Vim?</h1>
        <p className='sub-heading'>Learn how to more than just exit.</p>
      </div>
      <hr className='content-divider' />
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
      <AuthBox />
    </div>
  );
}
