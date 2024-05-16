import MovieData from "@/components/MovieData";

const API_KEY = process.env.API_KEY;

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
