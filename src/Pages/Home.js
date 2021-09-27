import React, { useState } from "react";
import ActorGrid from "../actor/ActorGrid";
import CustomRadio from "../components/CustomRadio";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/customHook";
import ShowGrid from "../show/ShowGrid";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [result, setResult] = useState();
  const [searchOption, setSearchOption] = useState("shows");
  const [loading, setLoading] = useState(false);

  const onSearch = () => {
    setLoading(true);
    setTimeout(() => {
      apiGet(`/search/${searchOption}?q=${input}`)
        .then((result) => {
          setResult(result);
        })
        .catch((error) => console.log(error.message));
      setLoading(false);
    }, 500);
  };
  const renderResult = (result) => {
    if (loading) {
      return <div>Data Loading</div>;
    }
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

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    ev.keyCode === 13 && onSearch();
  };

  const isShowOption = searchOption === "shows";
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        value={input}
        placeholder="Search movie or actor"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows"
            checked={isShowOption}
            value="shows"
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actor"
            id="people"
            checked={!isShowOption}
            value="people"
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      {renderResult(result)}
    </MainPageLayout>
  );
};

export default Home;
