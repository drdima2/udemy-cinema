import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Main.scss';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import SearchResult from '../content/search-results/SearchResult';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';

const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponsePageNumber, movieType, searchResult } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    // loadMoreMovies('now_playing', currentPage);
  }, [currentPage, totalPages, setResponsePageNumber]);

  const fetchData = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    } else {
      // loadMoreMovies('now_playing', currentPage);
    }
  };

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    // console.log(containerHeight, bottomLineTop);
    if (bottomLineTop <= containerHeight) {
      // fetch data
      fetchData();
    }
  };

  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll}>
        {loading ? (<Spinner />)
          : (
            <>
              {searchResult && searchResult.length === 0 ? <MainContent /> : <SearchResult />}
            </>
          )
        }
        <div ref={bottomLineRef}></div>
      </div>
    </>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  movieType: PropTypes.string,
  searchResult: PropTypes.array
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  movieType: state.movies.movieType,
  searchResult: state.movies.searchResult
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
