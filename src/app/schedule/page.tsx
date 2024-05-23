import Breaker from "../components/Breaker";
import Sponsors from "../components/Sponsors";
import ArtistSchedule from "../components/ArtistSchedule";

export default function Schedule() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h2>Tidsplan - Foofest 2024</h2>
                        <p>Her kan du finde et overblik over hvem spiller hvornår, opdelt efter scener.</p>
                    </div>
                </div>
            </div>
            <ArtistSchedule></ArtistSchedule>
            <Breaker title="Verdenskendte musikkere" content="Denne år så har vi den vildeste Lineup nogensinde, hvis du ønsker at se andre år, så klik på Læs mere"></Breaker>
            <Sponsors></Sponsors>
        </main>
    )
}