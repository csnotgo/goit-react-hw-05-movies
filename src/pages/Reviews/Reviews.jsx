import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movieApi';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(r => r.json())
      .then(data => setReviews(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content, avatar_path }) => {
            return (
              <ReviewItem
                key={id}
                path={avatar_path}
                author={author}
                content={content}
              />
            );
          })
        ) : (
          <p>We don't have any reviews for this movie ¯\_(ツ)_/¯</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
