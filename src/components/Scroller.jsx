import React, { useState } from 'react';

const Scroller = () => {
  const imageDir = 'src/assets/';
  const imageNames = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png',
    'img10.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (newIndex) => {
    if (newIndex >= 0 && newIndex < imageNames.length) {
      setCurrentIndex(newIndex);
    }
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % imageNames.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
    changeImage(newIndex);
  };

  return (
    <div className='bg-black h-screen'>
      <h1 className='font-sans font-bold text-3xl text-center p-5 text-white'>
        My Landing Pages
      </h1>
      <div className='display flex justify-around items-center m-10'>
        <button
          className='h-12 w-12 text-2xl rounded-full bg-gray-300 text-black flex justify-center items-center hover:bg-white'
          onClick={prevImage}
        >
          &lt;
        </button>
        <img
          src={`${imageDir}${imageNames[currentIndex]}`}
          alt={`Image ${currentIndex}`}
          className='h-96 rounded-lg border-l border-r border-t border-b border-gray-300 object-cover'
        />
        <button
          className='h-12 w-12 text-2xl rounded-full bg-gray-300 text-black flex justify-center items-center hover:bg-white'
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      <div className='flex justify-center gap-5 items-center p-10'>
        {imageNames.map((elem, i) => (
          <img
            key={i}
            src={`${imageDir}${elem}`}
            alt={`Image ${i}`}
            className={`h-16 inline-block rounded-lg cursor-pointer opacity-40 hover:opacity-100 transition-all hover:scale-110 border-l border-r border-t border-b border-gray-700 ${
              currentIndex === i ? ' scale-110 border-white border-4 opacity-95' : ''
            }`}
            onClick={() => changeImage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Scroller;
