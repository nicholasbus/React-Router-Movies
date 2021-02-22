import React from 'react';
import MovieCard from './MovieCard'
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={() => history.push(`${url}movies/${movie.id}`)} />
      ))}
    </div>
  );
}

