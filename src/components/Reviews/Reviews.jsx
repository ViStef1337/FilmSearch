import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmReviews } from '../../service/filmAPI.js';

export const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmReviews(filmId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmId]);
  return (
    <div>
      <ul>
        {reviews.map(item => {
          return (
            <li key={item.name}>
              <p>Author {item.author_details.name}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
