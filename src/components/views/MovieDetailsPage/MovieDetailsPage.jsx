import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import * as API from '../../API/API';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={API.ImageUrl + movie.backdrop_path}
            alt={movie.original_title}
          />
          <h2>{movie.original_title}</h2>
          <NavLink to={`/movies/${movieId}/credits`}>Cast</NavLink>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
