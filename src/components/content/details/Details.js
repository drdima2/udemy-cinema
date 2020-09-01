import React from 'react';

import './Details.scss';

import { connect } from 'react-redux';
import Rating from '../rating/Rating';
import Tabs from './tabs/Tabs';
import Overview from './overview/Overview';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';

const Details = (props) => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage:
              'url(https://www.pexels.com/assets/pexels-stock-photos-6c3d5eb0cbed47e1bdf44ff85ebd9cd4669f50b895b3c6e76a23a4fd43852099.jpg)'
          }}></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img
              src="https://www.pexels.com/assets/pexels-stock-photos-6c3d5eb0cbed47e1bdf44ff85ebd9cd4669f50b895b3c6e76a23a4fd43852099.jpg"
              alt=""
            />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>2020-12-03</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>
              <div className="rating">
                <Rating className="rating-stars" rating={6.5} totalStars={10} />
                &nbsp;
                <span>6.5</span> <p>(200) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Details);
