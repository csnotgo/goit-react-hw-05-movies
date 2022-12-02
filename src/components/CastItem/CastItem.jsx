import PropTypes from 'prop-types';
import { Item } from './CastItem.styled';
import defaultImg from './defaultImage.jpg';

export const CastItem = ({ path, name, character }) => {
  return (
    <Item>
      <img
        src={path ? 'https://image.tmdb.org/t/p/w200' + path : defaultImg}
        alt={name}
        width="166"
        height="250"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </Item>
  );
};

CastItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
