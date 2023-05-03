import { useState, useEffect } from 'react';

import * as API from '../../API/API';
import { Link } from 'react-router-dom';
const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  console.log(movies);

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    API.getSearchMovies(query).then(setMovies);
  }, [query]);

  const filterMovies = event => {
    return setQuery(event.currentTarget.value);
  };

  return (
    <>
      <input onChange={filterMovies} type="text" />

      <ul>
        {movies &&
          movies.map(({ id, poster_path, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <img src={API.ImageUrl + poster_path} alt="" width="300px" />
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MoviesPage;
