import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "./Context";
import styles from "../css/SingleMovie.module.css"

function SingleMovie() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <h1 className="loading" style={{textAlign:"center"}}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className={`${styles.movieSection}`}>
          <div className={`${styles.image} `}>
            <img src={movie.Poster} alt=""  className="w-100"/>
          </div>

          <div className={`${styles.cardContent}`}>
                <p className="card-text"> <span><b>Title :</b>&nbsp;</span>{movie.Title}</p>
                <p className="card-text"><span><b>Year :</b>&nbsp;</span>{movie.Year}</p>
                <p className="card-text"><span><b>Rating :</b>&nbsp;</span>{movie.imdbRating}</p>
                <p className="card-text"><span><b>Country :</b>&nbsp;</span>{movie.Country}</p>
                <p className="card-text"><span><b>Run Time :</b>&nbsp;</span>{movie.Runtime}</p>
                <p className="card-text"><span><b>Genre :</b>&nbsp;</span>{movie.Genre}</p>
                <NavLink to='/'> <button type="button" class="btn btn-primary">Go Back</button>
                </NavLink>
          </div>
      </div>
    </>
  );
}

export default SingleMovie;
