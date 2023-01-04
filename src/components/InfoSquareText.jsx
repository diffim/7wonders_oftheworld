import React, { useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAngleDoubleRight, FaShareSquare } from "react-icons/fa";
import Popup from "./Popup";

function InfoSquareText(props) {
  const [popupToggle, setPopupToggle] = useState(false);
  function closePopup() {
    setPopupToggle(false);
  }

  return (
    <>
      <div className="">
        <p className="text-xl mb-2">{props.header}</p>
        <p className="">{props.paragraph}</p>
        {props.isHomeText ? (
          <a
            href="#Pyramids"
            className="flex white justify-center group items-center"
          >
            {" "}
            <BsChevronDoubleRight
              size={15}
              className=" absolute right-3 bottom-3 active:scale-50   transition-all duration-500 group-hover:rotate-90"
            />
          </a>
        ) : (
          <div
            onClick={() => setPopupToggle(true)}
            className="  transition duration-100 active:scale-75 absolute   bottom-2 right-2  cursor-pointer    "
          >
            <div className="flex justify-center animate-pulse items-center">
              <FaShareSquare size={15} />
            </div>
          </div>
        )}
      </div>
      {popupToggle ? (
        <Popup
          closePopup={closePopup}
          header={props.header}
          information={props.information}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default InfoSquareText;
