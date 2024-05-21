import BookingArea from "../components/BookingArea";

export default async function BookingPage() {

    let headersList = {
        "Content-Type": "application/json"
       }
       
    let response = await fetch("http://localhost:8080/available-spots", { 
        method: "GET",
        headers: headersList
    });
    
    let data = await response.json();
    console.log(data);

    return (
        <main>
            <BookingArea data={data}></BookingArea>
        </main>
    )
}