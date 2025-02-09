import responseMovies from "../mocks/with-results.json";

export function useMovies() {
  const movies = responseMovies.Search;
  const mappedMovies = movies.map((movie) => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    poster: movie.Poster,
  }));
  return { movies: mappedMovies };
}
