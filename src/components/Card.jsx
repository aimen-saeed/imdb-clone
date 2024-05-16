import Image from "next/image";
import Link from "next/link";

export default function Card({ movie }) {
  return (
    <div className="group sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2"> 
      <Link href={`/movies/${movie.id}`}>
        {movie.posterURL === "N/A" ? (
          <Image
            src="/poster-not-found.jpg"
            alt="not found"
            width={500}
            height={300}
            className="sm:rounded-t-lg"
          ></Image>
        ) : (
          <Image
            src={movie.posterURL}
            alt="poster"
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-60 transition-opacity duration-400"
          ></Image>
        )}
        <div className="p-2">
         <h1 className="text-lg font-bold truncate">{movie.title}</h1>
        </div>
        
      </Link>
    </div>
  );
}
