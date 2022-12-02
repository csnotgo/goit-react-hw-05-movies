import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesById } from 'services/movieApi';
import { Link, List } from './MovieDetails.styled';
import { LinkItem } from 'components/PopularMovieItem/PopularMovieItem.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMoviesById(movieId)
      .then(r => r.json())
      .then(film => setMovie(film))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, release_date, vote_average, poster_path, overview, genres } =
    movie;

  const homeLocation = location.state?.home;
  const movieLocation = location.state?.from;

  return (
    <div style={{ padding: '20px 10px' }}>
      <LinkItem to={homeLocation ?? movieLocation}>🔰 Go back</LinkItem>
      <div style={{ display: 'flex', gap: '20px', padding: '20px 10px' }}>
        <img
          src={poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path}
          alt={title}
          height="450"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>
            {title} ({new Date(release_date).getFullYear()})
          </h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres && genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <h2 style={{ textAlign: 'center' }}>Additional information</h2>
      <List>
        <li>
          <Link
            to={'cast'}
            state={{
              home: homeLocation,
              from: movieLocation,
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={'reviews'}
            state={{
              home: homeLocation,
              from: movieLocation,
            }}
          >
            Reviews
          </Link>
        </li>
      </List>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
