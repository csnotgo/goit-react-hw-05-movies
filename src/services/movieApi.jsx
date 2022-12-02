const KEY = 'fc76c86b365a6387a5436d26b34344ea';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
};

export const fetchMoviesById = movie_id => {
  return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}`);
};

export const fetchMovieCast = movie_id => {
  return fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`);
};

export const fetchMovieReviews = movie_id => {
  return fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}`);
};

export const fetchMovieBySearch = query => {
  return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`);
};
