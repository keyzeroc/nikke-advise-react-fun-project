import React, { useContext, useMemo, useState } from "react";
import SelectableNikke from "./SelectableNikke";
import { uuidv4, getAllNikkesNames } from "../../lib/importedImages";

export default function NikkeSelector() {
  const [isSelectorShown, setIsSelectorShown] = useState(false);

  const mappedNikkes = getAllNikkesNames().map((nikke) => {
    const id = uuidv4();
    return <SelectableNikke key={id} nikke={nikke} />;
  });

  function showSelectorHandler() {
    setIsSelectorShown((prevIsSelectorShown) => !prevIsSelectorShown);
  }

  return (
    <div className="min-w-96">
      <button
        className="p-4 outline-0 border-0 rounded-t-full bg-selector/60 text-white cursor-pointer transition hover:bg-selector-hover/60 hover:text-black w-full"
        onClick={showSelectorHandler}
      >{`${isSelectorShown ? "⇩Hide" : "⇩Show"}  nikke selection⇩`}</button>
      {isSelectorShown && (
        <ul className="list-none grid grid-cols-auto  ">{mappedNikkes}</ul>
      )}
    </div>
  );
}
