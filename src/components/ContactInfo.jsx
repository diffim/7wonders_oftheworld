import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactInfo() {
  const SocialsItem = (props) => (
    <div
      className={`${
        !props.last && "border-b-2"
      } border-b-white/20 py-3 w-full  flex justify-center`}
    >
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  );

  return (
    <div className="group">
      <div className="absolute bg-gray-700/70 flex flex-col justify-center   top-[40%] right-0 w-8 group-hover:w-12 transition-all duration-300 z-10  rounded-tl-lg rounded-bl-lg h-64">
        <>
          <p className="vertical-text opacity-100 absolute top-4 left-[10%] group-hover:opacity-0 transition-all duration-700 flex justify-center pointer-events-none  select-none  items-center mb-4 font-semibold">
            Davud
          </p>
          <p className="vertical-text flex justify-center absolute bottom-4 left-[10%]  opacity-100 group-hover:opacity-0 transition-all duration-700  pointer-events-none  select-none items-center text-center font-semibold">
            Ibrahi<span className="scale-[85%] ml-[1px] -mt-[2px]">m</span>
          </p>
        </>

        <div
          className="opacity-0 group-hover:opacity-100 transition-all
           duration-700 flex     justify-evenly items-center flex-col"
        >
          <SocialsItem link="https://www.instagram.com/kdiffim/">
            <FaInstagram
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>
          <SocialsItem link="https://github.com/diffim">
            <FaGithub
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>

          <SocialsItem link="https://discordapp.com/users/593007920417996821">
            <FaDiscord
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>

          <SocialsItem
            last
            link="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ibra.davud@gmail.com"
          >
            <SiGmail
              size={25}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
