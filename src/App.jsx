import "./App.css";
import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

// const API_KEY = "c53286b7";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { query } = Object.fromEntries(new FormData(event.target));
    console.log(query);
  };

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, Harry Potter..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
