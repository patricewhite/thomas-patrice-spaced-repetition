import React from 'react';
import ContentBox from '../components/login/ContentBox';
import AuthBox from '../components/login/AuthBox';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const loginContent = {
    box1: {
      imgSrc: '../../frust1-300x251.jpg',
      imgAlt: 'Biting a computer',
      title: 'Tired of being an embarassment to your friends and family?'
    },
    box2: {
      imgSrc: '../../ka41.jpg',
      imgAlt: 'Sessions',
      title: 'Ever wanted to just end it?'
    },
    box3: {
      imgSrc: '../../wizard.jpg',
      imgAlt: 'Other Stuff',
      title: 'Go from 0 to hero by lerning 2 Vim with us!'
    }
  };
  return (
    <div className='views-login-page'>
      <div className='hero-container'>
        <h1 className='main-heading'>How do I Vim?</h1>
        <p className='sub-heading'>There's more to it than just exiting.</p>
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
