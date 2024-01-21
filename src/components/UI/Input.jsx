import React, { useState, useEffect, useContext } from "react";
import NikkeListContext from "../store/nikke-list-context";

export default function Input() {
  const [searchValue, setSearchValue] = useState("");
  const nikkeListContext = useContext(NikkeListContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      nikkeListContext.onSearchChange(searchValue);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  function changeHandler(e) {
    const value = e.target.value;
    setSearchValue(value);
  }

  return (
    <input
      className="min-w-96 p-8 mb-8 h-min w-full rounded-b-3xl text-black bg-color-bg/60 focus:outline-none placeholder:text-slate-700"
      type="search"
      name="search"
      placeholder="Start typing...."
      autoComplete="off"
      onChange={changeHandler}
      value={searchValue}
    />
  );
}
