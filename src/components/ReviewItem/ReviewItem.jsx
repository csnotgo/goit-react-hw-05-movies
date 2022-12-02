import PropTypes from 'prop-types';
import defaultImg from './defaultImage.jpg';
import { Box } from './ReviewItem.styled';

export const ReviewItem = ({ path, author, content }) => {
  return (
    <li>
      <Box>
        <img
          src={path ? 'https://image.tmdb.org/t/p/w200' + path : defaultImg}
          alt={author}
          width="40"
          height="40"
          style={{ borderRadius: '50%' }}
        />
        <b>{author}</b>
      </Box>
      <p>{content}</p>
    </li>
  );
};

ReviewItem.propTypes = {
  path: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};
