import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    <div>
      <h1>{show.name}</h1>
      <img src={show.image.medium} alt="img"></img>
      <p>{show.language}</p>
      GENRES:{' '}
      {show.genres.map((genre) => (
        <span style={{ marginRight: '4px' }} key={genre}>
          {genre}
        </span>
      ))}
      <p>{stripTags(show.summary)}</p>
      <p>{show.officialSite}</p>
    </div>
  );
};
