/*import styles from "page.module.css";*/

import Introduction from "./components/Introduction";
import FestLocation from "./components/FestLocation";
import Jumbotron from "./components/Jumbotron";
import TicketInfo from "./components/TicketInfo";
import Breaker from "./components/Breaker";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";

export default async function Home() {
  return (
    <>
    <Jumbotron></Jumbotron>
    <main>
      <Introduction></Introduction>
      <Gallery></Gallery>
      <TicketInfo></TicketInfo>
      <Breaker title="En drøm bliver til virkeligheden" content="Med over 20000 deltagere, 100 kunstnere og 12 års erfaring FooFest er virkelig uforglemmelig musik og kultur begivenhed til at huske."></Breaker>
      <Sponsors></Sponsors>
      <FestLocation></FestLocation>
    </main>
    </>
  )
}
