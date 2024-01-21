import React from "react";

const NikkeListContext = React.createContext({
  filteredList: [],
  searchValue: '',
  selectedNikke: '',
  onSearchChange: () => {},
  onNikkeSelect: () => {},
  filterList: () => {}
});

export default NikkeListContext;
