import Link from "next/link";
import { formatImgPath } from "../lib/formatString";

export default function ArtistCard(props: any) {

    const path = formatImgPath(props.logo)

    return(
        <div key={props.slug} className="card text-center d-flex flex-column justify-content-between">
            <img className="card-img-top" src={path} alt="Band image"></img>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">Genre: {props.genre}</p>
            </div>
            <div className="card-btn-wrapper">
                <Link className="btn btn-primary" href={"/artists/" + props.slug}>Læs mere...</Link>
            </div>
        </div>
    )
}