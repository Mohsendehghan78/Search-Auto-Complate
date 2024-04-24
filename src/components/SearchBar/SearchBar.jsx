import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
function SearchBar({setResults,data}) {
  const [input, setInput] = useState("");

 console.log(input);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((item) => {
          return (
            value &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(value)
          );
        });
       setResults(results)
      });
  };

  const changeHandler = (value) => {
    setInput(value);
    fetchData(value);
  };

  const close=()=>{
    setInterval(() => {
      setInput("")
    }, 10);
  }
 
  return (
    <div className=" inputWrapper">
      <FaSearch className=" seaechIcon" />
      <input
        type="text"
        placeholder=" search..."
        value={data ? data : input}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <IoClose onClick={close}/>
    </div>
  );
}

export default SearchBar;
