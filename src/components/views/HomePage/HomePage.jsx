import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import style from './HomePage.module.css';
import * as API from '../../API/API';
import './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.getTrending().then(setMovies);
  }, []);

  console.log('Это movies', movies);
  return (
    <>
      <ul>
        {movies &&
          movies.map(({ id, title, poster_path }) => (
            <li className={style.movieList} key={id}>
              <img
                className={style.photo}
                src={API.ImageUrl + poster_path}
                alt="Фильмы"
                width={200}
              />
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
