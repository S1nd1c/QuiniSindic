import React from "react";
import ReactCountryFlag from "react-country-flag";

function TableItem(props) {
  const haptic = window.Telegram.WebApp.HapticFeedback;
  const clicked = () => {
    haptic.impactOccurred("light");
    props.onClick(props.index);
  };
  return (
    <div onClick={clicked} className="py-3 flex w-full justify-around items-center">
      <div className="w-1/4 flex justify-center">
        {props.orderValue != "" ? (
          <div className="bg-euro-blue text-white rounded-full h-8 w-8 flex items-center justify-center">
            <span>{props.orderValue}</span>
          </div>
        ) : (
          <div className="border-euro-blue border-2 text-white rounded-full h-8 w-8 flex items-center justify-center"></div>
        )}
      </div>
      <div className="w-2/4">
        <span className="text-xl text-center">
          {props.team}
        </span>
      </div>
      <div className="w-1/4 flex justify-center">
        <ReactCountryFlag
          countryCode={props.flag}
          svg
          style={{
            width: "3em",
            height: "3em",
          }}
        />
      </div>
    </div>
  );
}

export default TableItem;
