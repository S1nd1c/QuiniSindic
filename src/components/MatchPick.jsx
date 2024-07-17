import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import ReactCountryFlag from "react-country-flag";
import knockouts from "../assets/knockouts.json";
import Bullet from "../components/Bullet";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Team(props) {
  return (
    <div
      className={`rounded box-border flex flex-col border-4 items-center ${
        props.selected ? "border-euro-blue" : "border-transparent"
      }`}
      onClick={props.onClick}
    >
      <ReactCountryFlag
        countryCode={props.flag}
        svg
        style={{
          width: "5em",
          height: "5em",
        }}
      />
      <span className={`text-xl`}>{props.name}</span>
    </div>
  );
}

const MatchPick = forwardRef((props, ref) =>   {
  const [pickIndex, setPickIndex] = useState(-1);
  const [scores, setScores] = useState([0, 0]);


  useImperativeHandle(ref, () => ({
    getData: () => {
      return { "Scores": scores,
        "Winner": pickIndex
      }
    }
  }));

  const handleScore = (index, value) => {
    const updatedScores = [...scores];
    updatedScores[index] = Number(value);
    setScores(updatedScores);

  };

  useEffect(() => {
    if (scores[0] > scores[1]) {
      setPickIndex(0);
    } else if (scores[0] < scores[1]) {
      setPickIndex(1);
    } else {
      setPickIndex(-1);
    }
  }, [scores]);

  const chooseWinner = (index) => {
    if (scores[0] === scores[1]) {
      setPickIndex(index);
    }
  };

  return (
      <div className="flex flex-col items-center h-full">
        <div className="w-80 bg-[#f2f6fc] rounded-lg h-full">
          <div className="flex mt-12 justify-around">
            <div className="w-2/5 flex flex-col items-center">
              <Team
                name={props.home}
                flag={knockouts.flags[props.home]}
                selected={pickIndex == 0}
                onClick={() => chooseWinner(0)}
              />
              <input
                placeholder="0"
                className="placeholder:text-black placeholder:font-bold mt-2 text-center text-xl font-bold w-12 h-12 outline bg-[#f2f6fc] outline-euro-blue rounded"
                type="number"
                name="homeScore"
                min="0"
                onChange={(e) => handleScore(0, e.target.value)}
              />
            </div>
            <div className="pt-9">
              <span className="font-bold">VS</span>
            </div>
            <div className="w-2/5 flex flex-col items-center">
              <Team
                name={props.away}
                flag={knockouts.flags[props.away]}
                selected={pickIndex == 1}
                onClick={() => chooseWinner(1)}
              />
              <input
                placeholder="0"
                className="placeholder:text-black placeholder:font-bold mt-2 text-center text-xl font-bold w-12 h-12 outline bg-[#f2f6fc] outline-euro-blue rounded"
                type="number"
                min="0"
                onChange={(e) => handleScore(1, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
  );
});

export default MatchPick;
