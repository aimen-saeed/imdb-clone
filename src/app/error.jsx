"use client";

export default function error({ error, reset }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col">
        <h1 className="text-2xl">Something went wrong.</h1>
        <button
          onClick={() => reset()}
          className="text-black hover:text-amber-600 bg-amber-200 p-3 rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
