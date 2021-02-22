import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function MovieCard (props) {
  const { title, director, metascore, id, stars } = props.movie;
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <div className="save-wrapper" onClick={() => history.push(`${url}movies/${id}`)}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {
          stars ?  <h3>Actors</h3> : null
        }
        {
          stars ? stars.map(star => <div key={star} className="movie-star">{star}</div>) : null
        }
        
      </div>
      <div className="save-button">Save</div>
    </div>
  )
}
