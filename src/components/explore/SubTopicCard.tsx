'use client';
import React, { useEffect, useState } from 'react';
import item from "@/data/subTopics"

const YourComponent = () => {
  const [ratingCount, setRatingCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('');

  return (
    <div className='w-max my-4'>
      <img
        src={item.cover}
        alt={item.cover}
        className='w-56 h-56 rounded-lg object-cover'
      />
      <h2 className='font-bold text-lg mt-4 overflow-ellipsis'>{item.title.length > 28
          ? item.title.slice(0, 28) + '...'
          : item.title}</h2>
      <p className='text-[#757575] mt-1'>
        {item.description.length > 28
          ? item.description.slice(0, 28) + '...'
          : item.description}
      </p>
      <p className='pl-3'>{ratingCount}</p>
    </div>
  );
};

export default YourComponent;
