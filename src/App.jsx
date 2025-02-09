import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

const API_KEY = "c53286b7";


function App() {
  
 const { movies: mappedMovies } = useMovies();
  

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
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
