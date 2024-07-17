import React from 'react'
import euro2020 from "../assets/img/euro2020.svg"
import qatar2022 from "../assets/img/qatar2022.svg"
import euro2024 from "../assets/img/euro2024_dark.png"

function Winner(props) {
    const returnLogo = (tournament) => {
        switch(tournament) {
            case "euro20":
                return euro2020;
            case "qatar22":
                return qatar2022;
            case "euro24":
                return euro2024;
            default:
                return "";
        }
    }
    return (
        <div className='w-80 rounded-lg h-auto bg-white flex items-center my-8'>
            <div className='p-3'>
                <img src={returnLogo(props.data.tournament)} className='w-14 h-auto'/>
            </div>
            <span className="text-xl">{props.data.name}: {props.data.winner}</span>
        </div>
    )
}

export default Winner