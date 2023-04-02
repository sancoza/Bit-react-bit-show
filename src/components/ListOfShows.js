import './ListOfShows.css';
import { useNavigate } from 'react-router';

export const ListOfShows = (props) => {

  const navigate = useNavigate();

  const onShowClick = (id) => {
    console.log(id);
    navigate(`/shows/${id}`);
  };

 

  return (
    <main className="container">
      {props.shows.slice(0, 12).map((show) => {
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
