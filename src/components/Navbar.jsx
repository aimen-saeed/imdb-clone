import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-6 items-center justify-center dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg">
      <NavbarItem title="Animation" param="animation" />
      <NavbarItem title="Horror" param="horror" />
      <NavbarItem title="Mystery" param="mystery" />
    </div>
  );
}
