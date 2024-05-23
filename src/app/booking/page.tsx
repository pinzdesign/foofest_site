import BookingArea from "../components/BookingArea";
import Sponsors from "../components/Sponsors";

export default async function BookingPage() {

    let headersList = {
        "Content-Type": "application/json"
       }
       
    let response = await fetch(process.env.NEXT_PUBLIC_SERVER_INFO_API_URL + "/available-spots", { 
        method: "GET",
        headers: headersList
    });
    
    let data = await response.json();
    console.log(data);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h2>Booking - Foofest 2024</h2>
                    </div>
                </div>
            </div>
            <BookingArea data={data}></BookingArea>
            <Sponsors></Sponsors>
        </main>
    )
}