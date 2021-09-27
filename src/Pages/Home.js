import React, { useState } from "react";
import ActorGrid from "../actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/customHook";
import ShowGrid from "../show/ShowGrid";

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [result, setResult] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => console.log(error.message));
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    ev.keyCode === 13 && onSearch();
  };

  const renderResult = () => {
    if (result && result.length === 0) {
      return <div>Not Found</div>;
    }
    if (result && result.length > 0) {
      return (
        <div>
          {result[0].show ? (
            <ShowGrid data={result} />
          ) : (
            <ActorGrid data={result} />
          )}
        </div>
      );
    }
  };
  const isShowOption = searchOption === "shows";
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  return (
    <MainPageLayout>
      <label htmlFor="shows">
        Show
        <input
          id="shows"
          type="radio"
          checked={isShowOption}
          value="shows"
          onChange={onRadioChange}
        />
      </label>
      <label htmlFor="people">
        Actor
        <input
          id="people"
          type="radio"
          checked={!isShowOption}
          value="people"
          onChange={onRadioChange}
        />
      </label>
      <input
        type="text"
        value={input}
        placeholder="Search movie or actor"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
