
const API_KEY = "c53286b7";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await res.json();
    const movies = json.Search;

    return movies?.map((movie) => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error fetching movies");
  }
};
