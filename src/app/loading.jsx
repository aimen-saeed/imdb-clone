import Image from "next/image";

export default function loading() {
  return (
    <Image
      src="/spinner.svg"
      alt="loading..."
      width={300}
      height={200}
      className="w-6xl mx-auto"
    ></Image>
  );
}
