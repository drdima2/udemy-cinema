import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';

const MainContent = () => {
  const images = [
    {
      url:
        'https://images.pexels.com/videos/855907/free-video-855907.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      url: 'https://i.ytimg.com/vi/CmxArNBJHFQ/maxresdefault.jpg'
    },
    {
      url:
        'https://www.telegraph.co.uk/content/dam/films/2016/12/12/titanic-main-xlarge_trans_NvBQzQNjv4Bqzcd--Xj9PJMVYU0p8x70SFqz9KkK9VrRB9X1d8OfXf0.jpg?imwidth=1200'
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage === 1) return;
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* display grid components */}
    </div>
  );
};

export default MainContent;
