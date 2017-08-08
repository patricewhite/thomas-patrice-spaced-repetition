import React from 'react';

export default function ContentBox(props) {
  const { imgSrc, imgAlt, title } = props;
  return (
    <div className='login-content-box'>
      <img
        src={imgSrc}
        alt={imgAlt}
      />
      <h3>{title}</h3>
    </div>
  );
}
