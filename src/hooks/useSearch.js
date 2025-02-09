import { useState, useEffect, useRef } from "react";

export function useSearch () {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    
    if (search.length === 0) {
      setError("The title is required");
      return;
    }

    if (search.match(/[^a-zA-Z0-9\s]/)) {
      setError("The title can only contain letters and numbers");
      return;
    }

    if (search.length < 3) {
      setError("The title must be at least 3 characters");
      return;
    }

    setError(null);
  },[search])

  return { search, updateSearch, error };
}