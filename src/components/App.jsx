import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/component/Layout/Layout';
import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { PageNotFound } from '../Error/PageNotFound';

const Movies = lazy(() => import ('../components/pages/Movies/Movies'))

const Cast = lazy(() => import ('../components/component/Cast/Cast'))

const Reviews = lazy(() => import ('../components/component/Reviews/Reviews'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};