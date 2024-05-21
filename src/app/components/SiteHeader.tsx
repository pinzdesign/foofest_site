import React from "react";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header>
      <div className="container-fluid navmenu">
        <nav className="navbar fixed-top navbar-expand-md">
          <a className="navbar-brand" href="#">
            Navbar
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" href={"/"}>
                  Forside
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/artists"}>
                  Kunstnere
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/schedule"}>
                  Tidsplan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/booking"}>
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
