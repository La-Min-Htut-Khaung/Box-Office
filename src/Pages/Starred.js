import React, { useState, useEffect } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import { useShows } from "../misc/customHook";
import ShowGrid from "../show/ShowGrid";

const Starred = () => {
  const [starred] = useShows();
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setLoading(false);
        })
        .catch((error) => setError(error.message));
    } else {
      setLoading(false);
    }

    return () => {
      console.log("exit");
    };
  }, [starred]);

  return (
    <MainPageLayout>
      {loading && <div>Shows are still loading</div>}
      {error && <div>Error occur {error}</div>}
      {!loading && !shows && <div>No Shows were added</div>}
      {!loading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
