export function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No movies found!</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
