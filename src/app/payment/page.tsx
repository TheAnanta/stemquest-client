'use client';
import React, { useState } from 'react';
import addresses from '@/data/payment';

const AddressAndPaymentComponent = () => {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);

  const handleAddressClick = (index: any) => {
    setSelectedAddressIndex(index);
  };

  return (
    <main className='w-screen flex flex-col justify-evenly px-16'>
      <nav className='gap-x-4 md:gap-x-8 flex mb-8'>
        <img src='/logo.svg' alt='logo' className='h-12 md:h-14' />
        <div className='grow md:hidden'></div>
        <input
          type='text'
          placeholder='Search by comic/edition'
          className='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full hidden md:flex'
        />
        <img
          src='/image/profile/sreetejadusi.jpg'
          alt='Sree Teja Dusi'
          className='w-12 h-12 md:w-14 md:h-14 rounded-full'
        />
      </nav>

      <h1 className='text-xl font-semibold'>ADDRESS & PAYMENT</h1>
      <div className='flex overflow-auto '>
        {addresses.map((item, index) => (
          <div
            key={index}
            onClick={() => handleAddressClick(index)}
            className={`p-4 ${
              selectedAddressIndex === index
                ? 'bg-red-800 border '
                : 'border border-black bg-white text-black'
            } text-white w-fit rounded-xl mr-2 flex flex-col justify-between items-start cursor-pointer`}
          >
            <h2 className='text-lg font-bold my-2'>{item.type}</h2>
            <h3 className='text-lg my-2'>{item.address}</h3>
            <h4 className='text-lg'>{item.contact}</h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AddressAndPaymentComponent;
