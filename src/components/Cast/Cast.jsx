import { useEffect, useState } from 'react';
import { getFilmCredits } from '../../service/filmAPI.js';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { filmId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmCredits(filmId);
        setActors(data);
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
        {actors.map(item => {
          return (
            <li key={item.name}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt=""
              />
              <p>Name {item.name}</p>
              <p>Character {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
