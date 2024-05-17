"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "family";
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${genre}/${search}`);
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
        <button
          type="submit"
          className="text-amber-600"
          disabled={search === ""}
        >
          Search
        </button>
      </form>
    </div>
  );
}
