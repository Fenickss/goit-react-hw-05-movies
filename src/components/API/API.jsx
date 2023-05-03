import axios from 'axios';

const KEY = '70e0b434eaac9f100e144777088acd3c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const { data } = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return data.results;
};

export const ImageUrl = 'https://image.tmdb.org/t/p/w500';
