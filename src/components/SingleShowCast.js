import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleShow.css';

export const SingleShowCast = () => {
  const [showCast, setShowCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.id}/cast`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowCast(data);
      });
  }, [params.id]);
  if (!showCast) {
    return null;
  }
  const castSlice = showCast.slice(0, 6);

  return (
    <div className="casts">
    
      {castSlice.map((member) => (
        <div className="cast">
        <article className='cast-card'>
        <h3 className='cast-name'>{member.person.name}</h3>
          <img className='cast-img' src={member.person.image.medium} alt="img"></img>
        </article>
        
        </div>
      ))}
    </div>
  );
};
