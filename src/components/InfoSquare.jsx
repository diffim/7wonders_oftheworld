import React, { useState } from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

function InfoSquare(props) {
  const [infoMost, setInfoMost] = useState(false);
  return (
    <div
      className={`absolute bottom-24 transition-all duration-700 bg-gray-600/60 rounded-r-sm  ${
        infoMost ? "w-[485px] h-36 p-6" : "w-16 h-16 "
      } `}
    >
      {!infoMost ? (
        <div className=" flex   justify-center h-full items-center">
          <span
            onClick={() => setInfoMost(true)}
            className="active:scale-90  cursor-pointer"
          >
            <BsChevronDoubleRight size={40} />
          </span>
        </div>
      ) : (
        <>
          {" "}
          <BsChevronDoubleLeft
            size={18}
            className={`absolute    opacity-100
             top-2 duration-500 transition-all right-2 
            cursor-pointer active:scale-75`}
            onClick={() => setInfoMost(false)}
          />
          <div>
            {" "}
            {/* props.content is located at consts.jsx */}
            <span className="transition-all infoSquareTextAnimation duration-500">
              {props.content}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoSquare;
