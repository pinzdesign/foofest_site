import {formatImgPath} from "@/app/lib/formatString";

export default async function Artist(props:any) {

    const response = await fetch(
        process.env.NEXT_PUBLIC_SERVER_INFO_API_URL + "/bands/" + props.params.slug
    );

    const data = await response.json();

    let logo = formatImgPath(data.logo)

    return(
        <>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={logo} alt={data.logoCredits} />
                    </div>
                    <div className="col-sm-8">
                        <h2>{data.name}</h2>
                        <p>Medlemmer: {data.members.map((member: string) => ( <span key={member}> {member}, </span> ))}</p>
                        <p>Genre: {data.genre}</p>
                        <p>Bio: {data.bio}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}