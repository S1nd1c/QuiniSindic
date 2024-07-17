import React from 'react'
import ReactCountryFlag from "react-country-flag";
import groups from "../assets/groups.json"

function TableGroup({ teams, name }) {
    return (
        <div className='flex flex-col justify-center items-center border-2 rounded border-white py-1'>
            <div>
                {name}
            </div>
            <div className='flex flex-col'>
                {teams.map((team, index) => (
                    <div key={index}>
                        <ReactCountryFlag countryCode={groups["flags"][team]}
                            svg
                            style={{
                                width: "2em",
                                height: "2em",
                            }} />
                        {/* <span>{team}</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TableGroup