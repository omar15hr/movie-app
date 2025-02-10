import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { useState, useCallback } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, isLoading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log("debouncedGetMovies", search);
      getMovies({ search });
    }, 300)
  , [getMovies]);


  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(event.target.value);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            value={search}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Avengers, Star Wars, Harry Potter..."
          />
          <label htmlFor="sort">Sort by title</label>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p className="input-error">{error}</p>}
      </header>

      <main>{isLoading ? <p className="loading">Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
