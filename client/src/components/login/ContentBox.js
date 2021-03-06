import React from 'react';

export default function ContentBox(props) {
  const { imgSrc, imgAlt, title } = props;
  return (
    <div className='login-content-box'>
      <img
        className='content-box-img'
        src={imgSrc}
        alt={imgAlt}
      />
      <div className='content-box-title'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
