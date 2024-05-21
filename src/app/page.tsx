/*import styles from "page.module.css";*/

import Introduction from "./components/Introduction";
import FestLocation from "./components/FestLocation";
import Jumbotron from "./components/Jumbotron";
import TicketInfo from "./components/TicketInfo";

export default async function Home() {
  return (
    <>
    <Jumbotron></Jumbotron>
    <main>
      <Introduction></Introduction>
      <TicketInfo></TicketInfo>
      <FestLocation></FestLocation>
    </main>
    </>
  )
}
