import { getTrendingMovies } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/component/MovieList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};
export default Home