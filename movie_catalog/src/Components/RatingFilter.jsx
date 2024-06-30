import React, { useState, useEffect } from "react";
import { API_URL } from "./Context";

const RatingFilter = () => {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search || []); // Ensure data.Search is an array
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=movie`);
    }, 500);
    return () => clearTimeout(timerOut);
  }, []);

  const filteredMovies = movies.filter((movie) => {
    if (rating === "") return true;
    return parseFloat(movie.imdbRating) >= parseFloat(rating);
  });

  return (
    <div className="rating-filter me-5 fs-5">
      <label htmlFor="rating">Filter by Rating:</label>
      <select
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">All</option>
        <option value="9">9 and above</option>
        <option value="8">8 and above</option>
        <option value="7">7 and above</option>
        <option value="6">6 and above</option>
        <option value="5">5 and above</option>
      </select>
      
    </div>
  );
};

export default RatingFilter;
