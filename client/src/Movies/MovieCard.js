import React from 'react';

export default function MovieCard (props) {
  const { title, director, metascore, stars, id } = props.movie;
  const { addToSavedList } = props
  return (
    <div className="save-wrapper">
      <div className="movie-card" onClick={props.onClick}>
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
      {
        stars ? <div className="save-button" onClick={() => addToSavedList(id)}>Save</div> : null
      }
      
    </div>
  )
}
