import { useState, useEffect } from 'react';
import './ListOfShows.css';
import { useNavigate } from 'react-router';

export const ListOfShows = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  const onShowClick = (id) => {
    console.log(id);
    navigate(`/shows/${id}`);
  };

  const fetchData = () => {
    fetch('http://api.tvmaze.com/shows')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShows(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      {shows.slice(0, 12).map((show) => {
        return (
          <div
            key={show.id}
            className="card"
            onClick={() => onShowClick(show.id)}
          >
            <img src={show.image.medium} alt="img" />
            <div className="card_body">
              <h3>{show.name}</h3>
              <p className="rating">{show.rating.average}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};
