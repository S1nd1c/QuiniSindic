import React, { useState, forwardRef, useImperativeHandle } from "react";
import TableItem from "./TableItem";

const TableSelect = forwardRef((props, ref) => {
  const [indices, setIndices] = useState(["", "", "", ""]);
  const [clickCount, setClickCount] = useState(1);

  useImperativeHandle(ref, () => ({
    getData: () => {
      return indices;
    }
  }));

  const indexClicked = (index) => {
    if (clickCount <= 4) {
      if (indices[index] == "") {
        let tmpArray = indices;
        indices[index] = clickCount;
        setIndices(tmpArray);
        setClickCount(clickCount+1);
      } else {
        setIndices(["", "", "", ""]);
        setClickCount(1);
      }
    } else {
      setIndices(["", "", "", ""]);
      setClickCount(1);
    }
  };

  return (
    <div className="mb-5">
      <div className="h-1/10">
        <span className="h-full text-2xl font-bold flex items-center justify-center">
          Grupo {props.group.name}
        </span>
      </div>
      <div className="flex justify-center bg-[#f2f6fc]  text-black rounded-md mt-5">
        <div className="h-full w-80  border-2 grid grid-rows-4 rounded">
          {props.group["teams"].map((team, index) => {
            return (
              <TableItem
                team={team.country}
                flag={team.code}
                key={index}
                index={index}
                orderValue={indices[index]}
                onClick={indexClicked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
})

export default TableSelect;
