import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleShow.css';

export const SingleShow = () => {
  const [show, setShow] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  }, [params.id]);

  if (!show) {
    return null;
  }
  function stripTags(summary) {
    return summary.replace(/(<([^>]+)>)/gi, '');
  }
  return (
    <div className="container ">
      <section className="single_show">
        <article>
          <img src={show.image.medium} alt="img"></img>
        </article>

        <article>
          <h1 className='show_name'>{show.name}</h1>
          GENRES:{' '}
          {show.genres.map((genre) => (
            <span style={{ marginRight: '8px' }} key={genre}>
              {genre}
            </span>
          ))}
          <p className="summary">{stripTags(show.summary)}</p>
          <p>{show.officialSite}</p>
        </article>
      </section>
      <section>
        <h1>CASTS</h1>
      </section>
    </div>
  );
};
