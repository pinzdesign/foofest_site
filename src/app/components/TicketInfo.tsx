export default function TicketInfo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h2>Bestilling af billetter</h2>
            <p>
              Bestil camping plads og billetter. Til at starte med, skal camping
              pladser registreres. Du kan bestille mere pladser end billetter,
              hvis du ønsker, men hver billet skal have en reserveret plads,
              derfor samlet antal af billetter kan ikke være større end der er
              reserverede pladser.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="ticket-wrap">
              <h3>Almindelig Billet</h3>
              <p>PRIS: 799 kr.</p>
              <ul>
                <li>Adgang til alle scener, alle dage</li>
                <li>Reservering af camping plads</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ticket-wrap">
              <h3>VIP Billet</h3>
              <p>PRIS: 1299 kr.</p>
              <ul>
                <li>Adgang til alle scener, alle dage</li>
                <li>Reservering af camping plads</li>
                <li>Adgang til VIP lounge</li>
                <li>Eksklusiv CD, DVD samling fra festivalen *</li>
              </ul>
              <p>
                <em>* Ankommer 1 uge efter festivalens afslutning.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
