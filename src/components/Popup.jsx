import React from "react";

function Popup(props) {
  return (
    <div className="bg-black/70 top-0 left-0 fixed z-50 w-screen h-screen">
      <div className="justify-center flex w-full h-screen  ">
        <div className="w-5/6 h-[93%] relative overflow-overlay bg-black/70 m-10 ml-20   px-20  py-20">
          <div
            className="absolute right-8 top-5 cursor-pointer active:scale-75 transition-all p-5  text-xl"
            onClick={props.closePopup}
          >
            X
          </div>
          <div className="flex  justify-center  flex-col">
            <p className="text-3xl text-center ">{props.header}</p>
            <div className="flex justify-center items-center ">
              <p className="text-2xl [&>p]:mt-10  max-w-screen-md mt-10">
                {" "}
                {props.information}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
