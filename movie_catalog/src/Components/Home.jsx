import Movie from "./Movie";
import RatingFilter from "./RatingFilter";
import Search from "./Search";
import styles from "../css/Home.module.css";
function Home() {
  return (
    <>
      <div>
        <div className={styles.header}>
          <h2>Movies</h2>
          <Search></Search>
          <div >
          <RatingFilter></RatingFilter>
        </div>
        </div>
        <Movie></Movie>
      </div>
    </>
  );
}

export default Home;
