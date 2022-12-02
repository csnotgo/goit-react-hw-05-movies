import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/movieApi';
import { CastItem } from 'components/CastItem/CastItem';
import { List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(r => r.json())
      .then(movie => setCast(movie.cast))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <CastItem
              key={id}
              path={profile_path}
              name={name}
              character={character}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Cast;
