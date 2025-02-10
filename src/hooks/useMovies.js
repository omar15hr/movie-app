import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setIsLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const sortedMovies = useMemo(() => {
    return sort 
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, isLoading, error };
}
