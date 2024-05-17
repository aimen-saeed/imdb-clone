import Image from "next/image";

export default async function MoviePage({ params }) {
  const res = await fetch(
    `https://api.sampleapis.com/movies/${params.genre}/${params.id}`
  );
  const data = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {data.posterURL != "N/A" ? (
          <Image
            src={data.posterURL}
            alt="poster"
            width={500}
            height={300}
            className="rounded-lg"
          ></Image>
        ) : (
          <Image
            src="/poster-not-found.jpg"
            alt="no poster"
            width={500}
            height={200}
            style={{ maxWidth: "100%", height: "100%" }}
          ></Image>
        )}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold"> {data.title}</h2>
          <p className="text-lg mb-3 ">
            In the heart of the bustling metropolis, a lone detective finds
            himself entangled in a web of deceit and danger in "City of
            Shadows." Set against the backdrop of a gritty urban landscape, this
            neo-noir thriller follows Detective Jack Malone as he delves deep
            into the underworld of corruption and crime. With his keen intellect
            and unwavering determination, Malone must navigate through a maze of
            lies and betrayal to unravel the truth behind a series of mysterious
            disappearances plaguing the city. As Malone delves deeper into the
            case, he discovers that nothing is as it seems in the City of
            Shadows. Haunted by his own demons and haunted by the ghosts of his
            past, Malone must confront his darkest fears as he races against
            time to solve the mystery before it's too late. With danger lurking
            around every corner and allies who may not be what they seem, Malone
            must rely on his instincts and ingenuity to survive the treacherous
            streets of the city. "City of Shadows" is a pulse-pounding thriller
            that will keep audiences on the edge of their seats from start to
            finish. With its gripping storyline, stunning visuals, and
            powerhouse performances, this film is a must-see for fans of the
            genre. So buckle up and prepare for a white-knuckle ride through the
            dark underbelly of the city where nothing is as it seems and danger
            lurks around every corner.
          </p>
          <span className="text-lg mb-3 font-bold">Duration: 1hr 30m</span>
        </div>
      </div>
    </div>
  );
}
