import MovieData from "@/components/MovieData";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "family";
  const res = await fetch(`https://api.sampleapis.com/movies/${genre}`);

  const data = await res.json();

  return (
    <div>
      <MovieData movies={data} searchParams={searchParams} />
    </div>
  );
}
