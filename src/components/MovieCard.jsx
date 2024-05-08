import React from 'react';
// create a MovieCard component that takes in a movie object as a prop and displays the movie details.
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    // if the Poster does not show, display a placeholder image instead.
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>
    
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h6>{Title}</h6>
      </div>
    </div>
  );
}

export default MovieCard;