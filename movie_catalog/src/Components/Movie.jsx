import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";
import styles from '../css/Movie.module.css'

function Movie() {
  const { movie ,rating } = useGlobalContext();
  const filteredMovies = movie.filter(currMovie => {
    if (rating === "") {
      return true;

    }
    const movieRating = parseFloat(currMovie.imdbRating);
    if (isNaN(movieRating)) {
      return false;
    }
    return movieRating >= parseFloat(rating);
  });
  return (
    <>
      <section className="container">
  <div className="row d-flex justify-content-center align-items-center">
    {filteredMovies.map((currMovie) => {
      const { imdbID, Title, Poster } = currMovie;
      const movieName = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;

      return (
        <div key={imdbID} className={`col-3 ${styles.mainCard}`}>
          <NavLink
            to={`movie/${imdbID}`}
            className="text-decoration-none"
          >
            <div className="card">
              <div className={styles.cardBody}>
                <p className="card-title">{movieName}</p>
              </div>
              <img src={Poster} alt={Title} className={`card-img-top ${styles.cardImgTop}`} />
            </div>
          </NavLink>
        </div>
      );
    })}
  </div>
</section>

    </>
  );
}

export default Movie;
