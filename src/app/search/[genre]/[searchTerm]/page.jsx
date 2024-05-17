import MovieData from "@/components/MovieData";

export default async function Search({ params }) {
  const genre = params.genre;
  const searchTerm = params.searchTerm;
  var filteredMovies = [];
  try {
    const data = await fetch(`https://api.sampleapis.com/movies/${genre}`);
    const movies = await data.json();
    filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div>
      {filteredMovies && filteredMovies.length === 0 && 
        <h1 className="text-center pt-6">No results found</h1>
      }
      {
        filteredMovies && <MovieData movies={filteredMovies} searchParams={params}/>
      }
      
    </div>
  );
}
