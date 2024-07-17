import React, { useEffect, useState } from "react";
import axios from "axios";

function Quiniela() {
  const [matches, setMatches] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchMatches = async () => {
      const url =
        "https://f7ekq2o916.execute-api.eu-west-3.amazonaws.com/dev/quiniela";
      try {
        const response = await axios.get(url, { crossdomain: true });
        setMatches(response.data.body);
        console.log(response.data.body);
      } catch (error) {
        console.error("Socio ¿y er furbo donde esta?", error);
      }
    };
    if (matches === "") {
      fetchMatches();
    }
  }, [matches]);

  const handleSelect = (index, option, team) => {
    setSelectedOptions((prevSelectedOptions) => {
      const key = index === 14 ? `${index}-${team}` : index;
      const newSelectedOptions = { ...prevSelectedOptions };
  
      if (newSelectedOptions[key] === option) {
        delete newSelectedOptions[key];
      } else {
        newSelectedOptions[key] = option;
      }
  
      return newSelectedOptions;
    });
  };

  return (
    <div className="bg-euro-blue min-h-screen p-4">
      <div className="flex justify-center mb-4">
        <span className="text-2xl text-white">Quiniela</span>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {matches &&
            matches.map((match, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between p-2 mb-2 rounded"
                >
                  <div className="flex items-center">
                    <span className="text-white p-4">
                      {match.local} - {match.visitante}
                    </span>
                  </div>
                  <div className="text-white flex items-center">
                    {index < 14 ? (
                      <>
                        <div
                          className={`border rounded px-4 py-2 mr-2 cursor-pointer ${
                            selectedOptions[index] === "1"
                              ? "bg-white text-euro-blue"
                              : ""
                          }`}
                          onClick={() => handleSelect(index, "1")}
                        >
                          1
                        </div>
                        <div
                          className={`border rounded px-4 py-2 cursor-pointer ${
                            selectedOptions[index] === "X"
                              ? "bg-white text-euro-blue"
                              : ""
                          }`}
                          onClick={() => handleSelect(index, "X")}
                        >
                          X
                        </div>
                        <div
                          className={`border rounded px-4 py-2 ml-2 cursor-pointer ${
                            selectedOptions[index] === "2"
                              ? "bg-white text-euro-blue"
                              : ""
                          }`}
                          onClick={() => handleSelect(index, "2")}
                        >
                          2
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col">
                        <div className="flex mb-2">
                          {["0", "1", "2", "M"].map((option) => (
                            <div
                              key={`${index}-local-${option}`}
                              className={`border rounded px-4 py-2 mx-1 cursor-pointer ${
                                selectedOptions[`${index}-local`] === option
                                  ? "bg-white text-euro-blue"
                                  : ""
                              }`}
                              onClick={() =>
                                handleSelect(index, option, "local")
                              }
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                        <div className="flex">
                          {["0", "1", "2", "M"].map((option) => (
                            <div
                              key={`${index}-visitante-${option}`}
                              className={`border rounded px-4 py-2 mx-1 cursor-pointer ${
                                selectedOptions[`${index}-visitante`] === option
                                  ? "bg-white text-euro-blue"
                                  : ""
                              }`}
                              onClick={() =>
                                handleSelect(index, option, "visitante")
                              }
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="rounded px-8 py-4 text-euro-blue bg-white mt-4">
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default Quiniela;
