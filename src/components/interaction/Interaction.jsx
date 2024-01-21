import React from "react";
import Nikke from "./Nikke";

export default function Interaction(props) {
  return (
    <li className="min-w-96 p-4 mt-8 grid md:grid-rows-2-sm md:grid-cols-auto-4 h-max align-top bg-color-bg/60 rounded-3xl ">
      <div className="row-span-2">
        <Nikke nikke={props.nikke} />
      </div>
      <p className="p-4 md:col-span-4 flex flex-col items-center font-medium text-[#1A001E]">
        {props.question}
      </p>
      <p className="p-4 md:col-span-2 bg-gradient-to-r from-[#1B7923] to-[#1B7973] bg-clip-text text-transparent font-normal">
        {props.goodAnswer}
      </p>
      <p className="p-4 md:col-span-2  bg-gradient-to-r from-[#8D2953] to-[#6E298D] bg-clip-text text-transparent font-normal">
        {props.badAnswer}
      </p>
    </li>
  );
}
