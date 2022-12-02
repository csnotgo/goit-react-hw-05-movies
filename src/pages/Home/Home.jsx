import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPopularMovies } from 'services/movieApi';
import { Box, MoviesList } from './Home.styled';
import { PopularMovieItem } from 'components/PopularMovieItem/PopularMovieItem';
import { LinkItem } from 'components/PopularMovieItem/PopularMovieItem.styled';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies()
      .then(r => r.json())
      .then(data => setMovies(data.results))
      .catch(console.error);
  }, []);

  return (
    <Box>
      <h1>Top 20 movies of the day</h1>
      <MoviesList>
        {movies.map(({ id, title, poster_path }) => (
          <LinkItem to={`/movies/${id}`} key={id} state={{ home: location }}>
            <PopularMovieItem title={title} imgSrc={poster_path} id={id} />
          </LinkItem>
        ))}
      </MoviesList>
    </Box>
  );
};

export default Home;
