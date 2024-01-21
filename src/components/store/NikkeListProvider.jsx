import React, { useState, useMemo, useEffect } from "react";
import NikkeListContext from "./nikke-list-context";
import data from "../../../data.json";

export default function NikkeListProvider(props) {
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedNikke, setSelectedNikke] = useState("");

  useEffect(() => {
    filterList();
  }, [searchValue, selectedNikke]);

  function searchChangeHandler(value) {
    setSearchValue(value.toLowerCase());
  }

  function nikkeSelectHandler(nikkeName) {
    const select = selectedNikke === nikkeName ? "" : nikkeName;
    setSelectedNikke(select);
  }

  function filterList() {
    if (searchValue.trim() == "" && selectedNikke === "") {
      setFilteredList([]);
    } else {
      setFilteredList((prevArr) => {
        return data.filter((obj) => {
          const isIncludesSearchValue =
            obj.nikke.toLowerCase().includes(searchValue) ||
            obj.question.toLowerCase().includes(searchValue) ||
            obj.goodAnswer.toLowerCase().includes(searchValue) ||
            obj.badAnswer.toLowerCase().includes(searchValue);
          if (selectedNikke !== "") {
            return isIncludesSearchValue && obj.nikke === selectedNikke;
          }
          return isIncludesSearchValue;
        });
      });
    }
  }

  const providerValues = useMemo(() => {
    return {
      filteredList: filteredList,
      searchValue: searchValue,
      selectedNikke: selectedNikke,
      onSearchChange: searchChangeHandler,
      onNikkeSelect: nikkeSelectHandler,
      filterList: filterList,
    };
  });

  return (
    <NikkeListContext.Provider value={providerValues}>
      {props.children}
    </NikkeListContext.Provider>
  );
}
