
const apiKey = import.meta.env.VITE_API_KEY;

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
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
