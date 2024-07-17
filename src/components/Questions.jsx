import React from 'react'
import { useEffect, useState } from 'react'
import ShowBet from './ShowBet';

function Questions(props) {
    const button = window.Telegram.WebApp.MainButton;

    const [player, setPlayer] = useState("");
    const [gk, setGk] = useState("")
    const [mvp, setMvp] = useState("");
    const [winner, setWinner] = useState("");

    const [isDone, setIsDone] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        
    }, []);

    const entriesFull = () => {
        return player != "" && gk != "" && mvp != "" && winner != "";
    }


    useEffect(() => {
        if (entriesFull()) {
            button.text = "Finalizar";
            button.color = "#143cdb"
            button.enable();
            button.show();
            button.onClick(function() {
                let userInput = props.currentData;
                if(window.Telegram.WebApp.initData) {
                    let username = new URLSearchParams(window.Telegram.WebApp.initData);
                    for (const [key, value] of username.entries()) {
                        if(key == "user") {
                            userInput["user"] = JSON.parse(decodeURIComponent(value))["username"];
                        }
                    }
                } else {
                    userInput["user"] = window.Telegram.WebApp.initDataUnsafe.user.username;
                }
                userInput["tournament_picks"] = {}
                userInput["tournament_picks"]["player"] = player;
                userInput["tournament_picks"]["gk"] = gk;
                userInput["tournament_picks"]["mvp"] = mvp;
                userInput["tournament_picks"]["winner"] = winner;
                userInput["time"] = Date.now();
                // //TODO arregla esto subnormal
                // userInput["groups"][0] = ['Alemania', 'Escocia', 'Eslovaquia', 'Francia']
                setData(userInput);
                setIsDone(true);
            })
        }
    }, [player, gk, mvp, winner]);

    return (
        <div className='h-full w-full bg-euro-blue text-white'>
        {
        isDone == false ? 
            <div className='bg-stadium bg-center h-full flex flex-col items-center'>
                <div className='w-3/4 mt-5 flex flex-col'>
                    <span className='text-xl'>Mejor Jugador:</span>
                    <input value={player} onChange={(e) => setPlayer(e.target.value)} className="mt-1 rounded h-8 text-black pl-2 focus:ring-0 focus:outline-none" type="text" />
                </div>
                <div className='w-3/4 mt-5 flex flex-col'>
                    <span className='text-xl'>Mejor Portero:</span>
                    <input value={gk} onChange={(e) => setGk(e.target.value)} className="mt-1 rounded h-8 text-black pl-2 focus:ring-0 focus:outline-none" type="text" />
                </div>
                <div className='w-3/4 mt-5 flex flex-col'>
                    <span className='text-xl'>Máximo Goleador:</span>
                    <input value={mvp} onChange={(e) => setMvp(e.target.value)} className="mt-1 rounded h-8 text-black pl-2 focus:ring-0 focus:outline-none" type="text" />
                </div>
                <div className='w-3/4 mt-5 flex flex-col'>
                    <span className='text-xl'>Ganador del torneo:</span>
                    <input value={winner} onChange={(e) => setWinner(e.target.value)} className="mt-1 rounded h-8 text-black pl-2 focus:ring-0 focus:outline-none" type="text" />
                </div>
            </div> :
        <div className=''>
            <ShowBet data={data} />
        </div>
    }
        </div> 
    )
}

export default Questions