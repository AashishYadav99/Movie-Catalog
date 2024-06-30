import { useGlobalContext } from "./Context";
import styles from '../css/Search.module.css'

function Search() {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <>
      <div className="main-conatiner">
        <div className={styles.container}>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>
            <p className="text-danger">{error.show && error.message}</p>
        </div>
        
        
      </div>
    </>
  );
}

export default Search;
