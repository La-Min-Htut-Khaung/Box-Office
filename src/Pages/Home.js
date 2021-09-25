import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onSearch = () => {
    //http://api.tvmaze.com/search/shows?q=girls
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    ev.keyCode === 13 && onSearch();
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
