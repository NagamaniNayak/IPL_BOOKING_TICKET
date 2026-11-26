import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MatchCard from "./MatchCard";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  const matches = [
    {
      team1: "RCB",
      team2: "MI",
      date: "April 5, 2026",
      venue: "Mumbai",
    },
    {
      team1: "CSK",
      team2: "KKR",
      date: "April 6, 2026",
      venue: "Chennai",
    },
    {
      team1: "DC",
      team2: "SRH",
      date: "April 7, 2026",
      venue: "Delhi",
    },
    {
      team1: "RR",
      team2: "PBKS",
      date: "April 8, 2026",
      venue: "Jaipur",
    },
    {
      team1: "SRH",
      team2: "CSK",
      date: "April 9, 2026",
      venue: "Hyderabad",
    },
    {
      team1: "KKR",
      team2: "RCB",
      date: "April 10, 2026",
      venue: "Kolkata",
    },
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <section id="matches">
        <h2>IPL 2026 Match Schedule</h2>

        <div className="matches">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Booking Counter</h2>

        <h3>Total Bookings: {count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Add Booking
        </button>
      </section>
    </>
  );
}

export default App;