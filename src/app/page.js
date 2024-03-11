'use client';
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    fetch("https://www.majorcineplex.com/apis/get_movie_avaiable")
      .then((response) => response?.json())
      .then((data) =>
        setData(data)
      )
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  useEffect(() => {
    const alreadyLoggedIn = sessionStorage.getItem('username');
    if (!alreadyLoggedIn) {
      router.push('/login');
    }
  })

  const transformedData = useMemo(() => {
    return data?.movies
  }, [data]);


  return (

    <main>
      <Navbar />
      <h1>Movie Finder</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {transformedData && (
        <MovieList movies={transformedData} />
      )}
    </main>
  );
}
