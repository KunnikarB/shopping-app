import PropTypes from 'prop-types';
import {React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Toggle }  from "./Toggle";
import "../iMovie.css";
import Logout from './Logout';
import useLocalStorage from "use-local-storage";



// Set up the API URL and fetch the data from the API using the search term as the title of the movie to search for.
const Imovie = ({ movie }) => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e6d2a710"

  // Set up the state for the movies and the search term.
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Use the useEffect hook to search for movies when the component mounts.
  useEffect(() => {
    searchMovies({movie});
  }, []);

  // Create an async function to fetch the data from the API 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // set the movies state to the data.Search array.
    setMovies(data.Search);
  };

  // Use the useLocalStorage hook to set the theme preference in local storage.
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    
    <div data-theme={isDark ? "dark" : "light"} >
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

      <div className="app">
        <h1>iMovie</h1>
        <Logout />

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
          
      </div>

      {movies?.length > 0 
      ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard  movie = { movie } />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  </div>
  
  );
};

Imovie.propTypes = {
  movie: PropTypes.array.isRequired,
};


export default Imovie;