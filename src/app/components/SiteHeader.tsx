import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteHeader() {
  return (
    <header>
      <div className="container-fluid navmenu">
        <nav className="navbar fixed-top navbar-expand-md">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="logo" width="155" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" href={"/"}>
                    <FontAwesomeIcon icon="house" className="icon" />
                    Forside
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/artists"}>
                    <FontAwesomeIcon icon="music" className="icon" />
                    Kunstnere
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/schedule"}>
                    <FontAwesomeIcon icon="calendar-days" className="icon" />
                    Tidsplan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/booking"}>
                    <FontAwesomeIcon icon="check-to-slot" className="icon" />
                    Booking
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
