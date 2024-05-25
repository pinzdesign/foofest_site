import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <address>
              <p><FontAwesomeIcon icon="house" className="icon" /> Adressevej 12</p>
              <p><FontAwesomeIcon icon="hashtag" className="icon" /> Bynavn 1234</p>
              <p><FontAwesomeIcon icon="envelope" className="icon" /> mail@foofest.dk</p>
              <p><FontAwesomeIcon icon="phone" className="icon" /> tlf: +45 12 34 56 78</p>
            </address>
          </div>
          <div className="col-md">
            <h5>Følg Os</h5>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <em className="text-sm">
              Foofestival 2024. All rights reserved. Made by Ivan Popov as a
              part of exam project.
            </em>
          </div>
        </div>
      </div>
    </footer>
  );
}
