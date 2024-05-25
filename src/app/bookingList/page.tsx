import BookingCard from "../components/BookingCard";
import Sponsors from "../components/Sponsors";

export default async function BookingList() {
  let apikey: string = process.env.NEXT_PUBLIC_API_KEY_DATABASE!;
  let headersList = {
    "Content-Type": "application/json",
    apikey: apikey,
  };

  let response = await fetch(
    process.env.NEXT_PUBLIC_SERVER_INFO_DATABASE_URL + "/bookings",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  //console.log(data);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h2>Booking List - Foofest 2024</h2>
            <p>Denne side er ikke tilgængelig til kunder, og bruges kun til at vise dataen som bliver gemt i Supabase.</p>
          </div>
        </div>
      </div>
      <div className="container grid_3">
        {
            data.map((item:any) => (
                <BookingCard key={item.camp_id} {...item}></BookingCard>
            ))
        }
      </div>
      <Sponsors></Sponsors>
    </main>
  );
}
