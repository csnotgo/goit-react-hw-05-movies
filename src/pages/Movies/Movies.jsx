import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/movieApi';
import { PopularMovieItem } from 'components/PopularMovieItem/PopularMovieItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'pages/Home/Home.styled';
import { LinkItem } from 'components/PopularMovieItem/PopularMovieItem.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieBySearch(query)
      .then(r => r.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar />

      <MoviesList>
        {movies.map(({ id, title, poster_path }) => (
          <LinkItem to={`/movies/${id}`} key={id} state={{ from: location }}>
            <PopularMovieItem
              title={title}
              imgSrc={poster_path}
              id={id}
            ></PopularMovieItem>
          </LinkItem>
        ))}
      </MoviesList>
    </div>
  );
};

export default Movies;
