import React, { useContext, useEffect, useMemo, useState } from "react";
import { getImageFromName } from "../../lib/importedImages";
import NikkeListContext from "../store/nikke-list-context";

export default function SelectableNikke(props) {
  const nikkeListContext = useContext(NikkeListContext);

  function onSelect() {
    nikkeListContext.onNikkeSelect(props.nikke);
  }

  const image = useMemo(() => getImageFromName(props.nikke));

  return (
    <li
      className={`border-solid border-2 border-purp-light flex justify-center items-end cursor-pointer bg-color-bg/50 ${
        nikkeListContext.selectedNikke === props.nikke
          ? "grayscale-0 bg-correct-dark"
          : "grayscale-80"
      } hover:bg-purp-x-light`}
      onClick={onSelect}
    >
      <img
        className="max-w-32 overflow-hidden"
        src={image}
        loading="lazy"
        alt={props.nikke}
      />
    </li>
  );
}
