import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-6 items-center justify-center dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}