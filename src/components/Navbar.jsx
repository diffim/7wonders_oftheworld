import React from "react";

function Navbar(props) {
  const wonders = [
    { name: "Home", id: "#Home" },
    { name: "Pyramids", id: "#Pyramids" },
    { name: "Babylon", id: "#Babylon" },
    { name: "Olympia", id: "#Olympia" },
    { name: "Artemis", id: "#Artemis" },
    { name: "Halicarnassus", id: "#Halicarnassus" },
    { name: "Colossus ", id: "#Colossus " },
    { name: "Lighthouse ", id: "#Lighthouse " },
  ];
  return (
    <div className="absolute top-0  bg-gray-700/70 left-0 w-full h-12 text-white  flex items-center justify-center group">
      <p
        className="text-2xl absolute   select-none
   left-0 right-0 text-center   font-semi-bold opacity-100 group-hover:opacity-0 transition-all pointer-events-none   duration-700 "
      >
        7 wonders of the world
      </p>

      <div className="group-hover:opacity-100 gap-2 opacity-0 transition-all   duration-700  flex">
        {wonders.map((wonder, i) => {
          return (
            <a
              key={i}
              href={wonder.id}
              className="text-lg active:scale-90 mx-5 navbar-item--hover cursor-pointer"
            >
              {wonder.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
