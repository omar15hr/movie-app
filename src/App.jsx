import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

// const API_KEY = "c53286b7";

function App() {
  
  const { search, updateSearch, error } = useSearch();
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
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
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
