'use client';
import React, { useEffect, useState } from 'react';
import items from '@/data/subTopics';

const YourComponent = () => {
  const [ratingCount, setRatingCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('');

  return (
    <div className='grid grid-cols-4'>
      {items.map((item) => {
        return (
          <div>
            <img
              src={item.cover}
              alt={item.cover}
              className='w-56 h-56 rounded-lg object-cover'
            />
            <h2 className='font-bold text-lg mt-4 overflow-ellipsis'>
              {item.title.length > 28
                ? item.title.slice(0, 28) + '...'
                : item.title}
            </h2>
            <p className='text-[#757575] mt-1'>
              {item.description.length > 28
                ? item.description.slice(0, 28) + '...'
                : item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default YourComponent;
