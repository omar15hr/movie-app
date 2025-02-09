import "./App.css";
import responseMovies from "./mocks/with-results.json";
import { Movies } from "./components/Movies";

const API_KEY = "c53286b7";

function App() {
  
  const movies = responseMovies.Search;

  

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input
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
