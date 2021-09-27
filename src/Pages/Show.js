import React from "react";
import { useParams } from "react-router";
import ShowMainData from "../show/ShowMainData";
import Details from "../show/Details";
import Seasons from "../show/Seasons";
import Cast from "../show/Cast";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";
import { useShow } from "../misc/customHook";

const Show = () => {
  const { id } = useParams();
  const { loading, data, error } = useShow(id);

  if (loading) {
    return "Data Loading";
  }
  if (error) {
    return `error is ${error}`;
  }
  if (!loading && !error && data) {
    return (
      <ShowPageWrapper>
        <ShowMainData
          name={data.name}
          rating={data.rating}
          summary={data.summary}
          tags={data.genres}
          image={data.image}
        />
        <InfoBlock>
          <Details
            status={data.status}
            premiered={data.premiered}
            network={data.network}
          />
        </InfoBlock>
        <InfoBlock>
          <Seasons seasons={data?._embedded?.seasons ?? []} />
        </InfoBlock>
        <InfoBlock>
          Cast
          <Cast cast={data?._embedded?.cast ?? []} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
};

export default Show;
