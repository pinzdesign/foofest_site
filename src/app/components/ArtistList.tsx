import ArtistCard from "./ArtistCard";

export default async function ArtistList() {
  const response = await fetch(process.env.NEXT_PUBLIC_SERVER_INFO_API_URL + "/bands");

  const data = await response.json();
  //console.log(data)

  return (
    <div className="container">
      <div className="grid_3">
        {data.map((band: any) => (
          <ArtistCard key={band.slug} {...band}></ArtistCard>
        ))}
      </div>
    </div>
  );
}
