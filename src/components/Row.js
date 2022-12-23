import axios from '../api/axios';
import React, { useEffect, useState } from 'react'


const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchMovieData();
  }, [])

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              // onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className="arrow">
            {">"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Row
