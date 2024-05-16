"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import MovieData from "./MovieData";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    try {
      const data = await fetch(`https://api.sampleapis.com/movies/${genre}`);
      const movies = await data.json();
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setfilteredMovies(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(genre);
    fetchData();
  };

  return (
    <div>
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="text-amber-600" disabled={search === ""}>
        Search
      </button>
    </form>
    {/* {filteredMovies && <MovieData movies={filteredMovies} searchParams={searchParams}></MovieData>} */}
    </div>
  );
}
