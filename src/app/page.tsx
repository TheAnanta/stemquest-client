import React from 'react';

export default function Page() {
  return (
    <div className='background-container'>
      <img
        src='/assets/image/background/background.png'
        alt=''
        className='background'
      />
      <img src='/assets/image/background/birds.png' alt='' className='birds' />
      <img
        src='/assets/image/background/clouds.png'
        alt=''
        className='clouds'
      />
      <button className='z-10'>Student</button>
    </div>
  );
}
