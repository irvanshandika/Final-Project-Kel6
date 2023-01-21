import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`https://localhost:7137/api/books?search=${searchValue}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="searchbar text-center" style={{ backgroundColor: "#b8fff9" }}>
        <form onSubmit={handleSubmit}>
          <input className="searchinput" type="text" value={searchValue} onChange={handleSearch} placeholder="Search..." />
          <button className="btn-submit" type="submit">
            SEARCH
          </button>
        </form>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default SearchBar;
