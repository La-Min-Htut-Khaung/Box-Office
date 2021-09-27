import React from "react";
import { TitleWrapper } from "./Title.styled";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <TitleWrapper>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
    </TitleWrapper>
  );
};

export default Title;
