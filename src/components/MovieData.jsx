import Card from "./Card";
import SearchBox from "./SearchBox";

export default function MovieData({ movies, searchParams }) {
  const genre = searchParams.genre || "family";
  return (
    <div>
      <SearchBox />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4">
        {movies.map(movie => {
          return (
            <Card
              key={movie.id}
              movie={movie}
              genre={genre}
            />
          );
        })}
      </div>
    </div>
  );
}
