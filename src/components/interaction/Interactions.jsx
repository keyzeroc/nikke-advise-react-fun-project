import React, { useContext } from "react";
import Interaction from "./Interaction";
import { uuidv4 } from "../../lib/importedImages";
import NikkeListContext from "../store/nikke-list-context";

export default function Interactions() {
  const nikkeListContext = useContext(NikkeListContext);

  const content =
    nikkeListContext.filteredList.length > 0
      ? nikkeListContext.filteredList.map((question) => {
          return (
            <Interaction
              key={uuidv4()}
              nikke={question.nikke}
              question={question.question}
              goodAnswer={question.goodAnswer}
              badAnswer={question.badAnswer}
            />
          );
        })
      : nikkeListContext.searchValue.trim() !== "" && (
          <li className="p-8 text-center bg-color-bg/60 border rounded-2xl">
            No interactions found!
          </li>
        );
  return <ul className="list-none">{content}</ul>;
}
