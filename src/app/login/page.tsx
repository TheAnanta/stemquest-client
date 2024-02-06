import React from 'react';

export default function page() {
  return (
    <section>
      <div className='flex h-screen'>
        <div className='w-[60%]'>
          <img src='/loginbg.svg' alt='loginbg' className=' object-cover' />
        </div>
        <div className='flex flex-col items-center justify-center w-[40%] bg-gradient-to-r from-yellow-50 to bg-yellow-100'>
          <h1 className='text-2xl font-semibold text-[#DC9346] mb-6'>Login</h1>
          <h2 className='text-center mb-6'>
            Enter your username <br /> and password to continue
          </h2>
          <input
            type='email'
            title='email'
            className='bg-[#5E7273]/30 border-none rounded-xl focus:outline-none pl-4 py-4 px-8 mb-2'
            placeholder='Enter your email...'
          />
          <input
            type='password'
            title='password'
            className='bg-[#5E7273]/30 rounded-xl focus:outline-none pl-4 py-4 px-8'
            placeholder='Enter your Password...'
          />
        </div>
      </div>
      <img
        src='/login.png'
        alt=''
        className='w-64 h-20  right-0 bottom-0 absolute z-10'
      />
    </section>
  );
}
