import React from 'react';

export default function Page() {
  return (
    <div className='background-container'>
      <img
        src='/image/background/background.png'
        alt=''
        className='background'
      />
      <img src='/image/background/birds.png' alt='' className='birds' />
      <img src='/image/background/clouds.png' alt='' className='clouds' />
      <button className='z-10'>Student</button>
    </div>
  );
}
