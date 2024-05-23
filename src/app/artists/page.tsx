import ArtistList from "../components/ArtistList";
import Sponsors from "../components/Sponsors";

export default async function ArtistsPage() {
  return (
    <>
      <main>
      <div className="container">
          <div className="row">
              <div className="col-lg">
                  <h2>Kunstnere - Foofest 2024</h2>
                  <p>Her kan du finde personlig info om alle musikkere som deltager i denne år.</p>
              </div>
          </div>
      </div>
        <ArtistList></ArtistList>
        <Sponsors></Sponsors>
      </main>
    </>
  )
}
