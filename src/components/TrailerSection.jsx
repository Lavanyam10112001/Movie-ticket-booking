import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';
import ReactPlayer from 'react-player';
import { dummyTrailer } from '../assets/assets';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailer[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 pt-8 pb-12 overflow-hidden'>
      <p className='text-gray-300 font-medium text-2xl text-center'>Trailers</p>

      {/* Main Video Player */}
      <div className='relative mt-6 flex justify-center'>
        <BlurCircle top='-100px' right='-100px' />
        {currentTrailer?.videoUrl && (
          <ReactPlayer
            url={currentTrailer.videoUrl}
            controls={true}
            className="react-player"
            width="960px"
            height="540px"
          />
        )}
      </div>

      {/* Trailer Thumbnails */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto'>
        {dummyTrailer.map((trailer) => (
          <div
            key={trailer.image}
            className='relative cursor-pointer h-72 md:h-80 hover:-translate-y-1 transition duration-300'
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;

