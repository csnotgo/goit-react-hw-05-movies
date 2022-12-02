import PropTypes from 'prop-types';
import { Item, Title } from './PopularMovieItem.styled';

export const PopularMovieItem = ({ title, imgSrc }) => {
  return (
    <Item>
      <img
        src={imgSrc && 'https://image.tmdb.org/t/p/w300' + imgSrc}
        alt={title}
        width="300"
        height="450"
      />
      <Title>{title}</Title>
    </Item>
  );
};

PopularMovieItem.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};
