import React, { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Bullet from "./Bullet";
import knockouts from "../assets/knockouts.json";

function Carrousel({ refs, onFinished, children }) {
  const haptic = window.Telegram.WebApp.HapticFeedback;
  const [currentGroup, setCurrentGroup] = useState(0);
  const [buttonShow, setButtonShow] = useState(false);
  const [bullets, setBullets] = useState(
    new Array(knockouts.matches.length).fill(null)
  );
  
  const nextGroup = () => {
    if (currentGroup <= knockouts.matches.length - 1) {
      if(currentGroup < knockouts.matches.length - 1) {
        setCurrentGroup(currentGroup + 1);
      }
      const prediction = refs[currentGroup].current.getData();
      if(prediction.Winner > -1) {
        const newBullets = bullets;
        newBullets[currentGroup] = prediction;
        setBullets(newBullets);
        console.log(bullets);
      }
    }

    if(bullets.every((pred) => pred != null)) {
      setButtonShow(true);
    }
  };

  const prevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  return (
    <div className="h-2/5">
      {children.map((child, index) => (
        <div key={index} className={index == currentGroup ? "h-full" : `hidden`}>
          {child}
        </div>
      ))}
      <div className="w-full flex justify-center items-center mt-4">
        <div className="w-1/4 flex justify-start pl-10" onClick={prevGroup}>
          <MdArrowBackIos className="text-xl text-white" />
        </div>
        <div className="w-2/4 flex space-x-2 md:space-x-4 items-center justify-center">
          {buttonShow ? (
            <div
              className="bg-euro-blue text-white border border-white font-bold text-l rounded p-2"
              onClick={() => onFinished(bullets)}
            >
              Finalizar
            </div>
          ) : (
            bullets.map((filled, num) => (
              <Bullet
                key={num}
                filled={filled}
                selected={currentGroup === num}
              />
            ))
          )}
        </div>
        <div className="w-1/4 flex justify-end pr-10" onClick={nextGroup}>
          <MdArrowForwardIos className="text-xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
