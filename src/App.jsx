import { useEffect, useRef, useState } from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import InfoSquare from "./components/InfoSquare";
import { useInView } from "react-intersection-observer";
import {
  INFO_ARTEMIS,
  INFO_BABYLON,
  INFO_COLOSSUS,
  INFO_HALICARNASSUS,
  INFO_HOME,
  INFO_LIGHTHOUSE,
  INFO_OLYMPIA,
  INFO_PYRAMID,
} from "./consts";

function App() {
  //this is done using the react-intersection-observer api
  //https://github.com/thebuilder/react-intersection-observer
  const { ref: homeRef, inView: homeIsVisible } = useInView();
  const { ref: pyramidsRef, inView: pyramidsIsVisible } = useInView();
  const { ref: olympiaRef, inView: olympiaIsVisible } = useInView();
  const { ref: babylonRef, inView: babylonIsVisible } = useInView();
  const { ref: lighthouseRef, inView: lighthouseIsVisible } = useInView();
  const { ref: colossusRef, inView: colossusIsVisible } = useInView();
  const { ref: artemisRef, inView: artemisIsVisible } = useInView();
  const { ref: halicarnassusRef, inView: halicarnassusIsVisible } = useInView();
  const [infoSquareText, setInfoSquareText] = useState();

  let infoInsideSquare = <h1>home page</h1>;
  if (homeIsVisible) {
    infoInsideSquare = INFO_HOME;
  } else if (pyramidsIsVisible) {
    infoInsideSquare = INFO_PYRAMID;
  } else if (babylonIsVisible) {
    infoInsideSquare = INFO_BABYLON;
  } else if (olympiaIsVisible) {
    infoInsideSquare = INFO_OLYMPIA;
  } else if (colossusIsVisible) {
    infoInsideSquare = INFO_COLOSSUS;
  } else if (artemisIsVisible) {
    infoInsideSquare = INFO_ARTEMIS;
  } else if (lighthouseIsVisible) {
    infoInsideSquare = INFO_LIGHTHOUSE;
  } else if (halicarnassusIsVisible) {
    infoInsideSquare = INFO_HALICARNASSUS;
  }

  return (
    <div className=" flex h-screen font-Poppins text-white scroll-smooth snap-mandatory snap-both overflow-overlay">
      <Navbar />
      <div className="flex-col flex-none">
        <Section id="Home" bgclassName="home-background" uniqueRef={homeRef} />
        <Section
          uniqueRef={pyramidsRef}
          id="Pyramids"
          bgclassName="pyramid-background"
        />
        <Section
          uniqueRef={babylonRef}
          id="Babylon"
          bgclassName="babylon-background"
        />
        <Section
          uniqueRef={olympiaRef}
          id="Olympia"
          bgclassName="olympia-background"
        />
      </div>
      <div className="flex-col flex-none">
        <Section
          id="Artemis"
          uniqueRef={artemisRef}
          bgclassName="artemis-background"
        />
        <Section
          id="Halicarnassus"
          uniqueRef={halicarnassusRef}
          bgclassName="halicarnassus-background"
        />

        <Section
          id="Colossus"
          uniqueRef={colossusRef}
          bgclassName="colossus-background"
        />

        <Section
          id="Lighthouse"
          uniqueRef={lighthouseRef}
          bgclassName="lighthouse-background"
        />
      </div>
      <ContactInfo />
      <InfoSquare content={infoInsideSquare} />
    </div>
  );
}

export default App;
