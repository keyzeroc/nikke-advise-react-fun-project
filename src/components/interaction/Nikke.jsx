import React from "react";

import { getImageFromName } from "../../lib/importedImages";

export default function Nikke(props) {
  const image = getImageFromName(props.nikke);
  return (
    <div className="h-full border-dashed border-b-2 md:border-b-0 md:border-r-2 border-white flex flex-col justify-end items-center">
      <img src={image} loading="lazy" alt={props.nikke} />
      <p className="font-bold	uppercase text-center text-wrap text-[#1A001E]">
        {props.nikke}
      </p>
    </div>
  );
}
