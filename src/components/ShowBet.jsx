import React from "react";
import { useState, useEffect } from "react";
import TableGroup from "./TableGroup";
import knockouts from "../assets/knockouts.json";
import ReactCountryFlag from "react-country-flag";

function Match({ data, teams }) {
  console.log(data)
  return (
    <div className="text-white p-3 flex items-center justify-between">
      <div className="flex justify-center items-center ml-4">
        <ReactCountryFlag
          countryCode={knockouts.flags[teams.home]}
          svg
          style={{
            width: "3em",
            height: "3em",
            filter: data.Winner != 0 ? "grayscale(1)" : ""
          }}
        />
      </div>
      <div className="flex items-center justify-between text-lg">
        {teams.home} {data.Scores[0]} - {data.Scores[1]} {teams.away} 
      </div>
      <div className="flex items-center mr-4">
        <ReactCountryFlag
          countryCode={knockouts.flags[teams.away]}
          svg
          style={{
            width: "3em",
            height: "3em",
            filter: data.Winner != 1 ? "grayscale(1)" : ""
          }}
        />
      </div>
    </div>
  );
}

function ShowBet({ data }) {
  return (
    <div className="h-full bg-euro-blue">
      {data.map((match, index) => (
        <Match data={match} teams={knockouts.matches[index]} />
      ))}
    </div>
  );
}

export default ShowBet;
