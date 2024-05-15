export default function MovieData({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  );
}
