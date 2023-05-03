import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as API from '../../API/API';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  console.log(reviews);
  const { movieId } = useParams();
  console.log(reviews);
  useEffect(() => {
    API.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
            <Link to={`/movies/${id}/reviews`}></Link>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
