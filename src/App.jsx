import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import MatchPick from "./components/MatchPick";
import Carrousel from "./components/Carrousel";
import ShowBet from "./components/ShowBet"
import knockouts from "./assets/knockouts.json";

function App() {
  const tlg = window.Telegram.WebApp;
  useEffect(() => {
    tlg.expand();
    tlg.setHeaderColor("#143CDB")
  }, []);
  const refs = [];
  knockouts.matches.forEach((value) => {
    refs.push(useRef());
  })
  //console.log(refs)
  const [displayBet, setDisplayBet] = useState(false)
  const [prediction, setPredictions] = useState(null)

  return (
    <div className="h-full bg-stadium bg-center text-black">
      {
        displayBet == false ?
          <Carrousel refs={refs} onFinished={(matches) => { setDisplayBet(true); setPredictions(matches) }}>
            {
              knockouts.matches.map((value, index) => (
                <MatchPick key={index} ref={refs[index]} home={value.home} away={value.away} />
              ))
            }
          </Carrousel>
          :
          <ShowBet data={prediction} />
      }

    </div>
  );
}

export default App;
