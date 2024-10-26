import React, { useState } from 'react';
import { TrendingTags } from '../../Exports.js';
import BlogContent from './BlogContent.jsx';
import PopUpCard from './PopUpCard.jsx';


export default function Blogs() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2F2B68] via-[#312B65] to-[#5f1831] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="mt-20 text-4xl font-bold mb-8 text-center">For You</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 w-full ml-10 lg:sticky top-20 lg:h-screen">
            <TrendingTags />
            <button 
              className='styled-button mt-10 rounded' 
              onClick={handleButtonClick}
            >
              Write a New Blog
            </button>
          </div>
          <div className="lg:w-3/4 w-full">
            <BlogContent />
          </div>
        </div>
      </div>
      {isPopupOpen && <PopUpCard onClose={handleClosePopup} />}
    </div>
  );
}