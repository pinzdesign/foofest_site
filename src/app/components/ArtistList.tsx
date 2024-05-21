import ArtistCard from "./ArtistCard";

export default async function ArtistList() {
    const response = await fetch(
        process.env.SERVER_INFO_API_URL + "/bands"
    );

    const data = await response.json();
    //console.log(data)

    return (
    <div className="container">
        <h1>Kunstnere - FooFest 2024</h1>
        <div className="grid_3">
            {data.map((band : any) => (
                <ArtistCard {...band}></ArtistCard>
            ))}
        </div>
    </div>
    );
}