import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Cast.module.css';
import * as API from '../../API/API';
const Cast = () => {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();
  console.log(casts);
  useEffect(() => {
    API.getMovieCast(movieId).then(setCasts);
  }, [movieId]);

  return (
    <ul className={style.photoList}>
      {casts &&
        casts.map(({ id, name, profile_path, original_name }) => (
          <li className={style.photoItem} key={id}>
            <img
              className={style.photo}
              src={API.ImageUrl + profile_path}
              alt="cast"
              width={200}
            />
            <h3 className={style.name}>{original_name}</h3>
            <p className={style.role}>{name}</p>
            <Link to={`/movies/${id}/credits`}></Link>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
