import React from "react";
import "../styles/search";

const Search = ({ value, onChange, search }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => search(value)}>Find Your Pokemon!</button>
    </div>
  );
};

export default Search;
