import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import Cast from './views/Cast/Cast';
import Reviews from './views/Reviews/Reviews';

const App = () => {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/movies" element={<MoviesPage />} exact />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/credits" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
export default App;
