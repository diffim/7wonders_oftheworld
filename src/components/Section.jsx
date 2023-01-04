import React from "react";

function Section(props) {
  return (
    <section
      id={props.id}
      className={`bg-black grid-none snap-center flex-none
    w-screen bg-no-repeat bg-cover
    ${props.bgclassName} 

      h-screen text-white    `}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="opacity-0 w-3/4 h-3/4   top-36 left-56"
          ref={props.uniqueRef}
        ></div>
      </div>
    </section>
  );
}

export default Section;
