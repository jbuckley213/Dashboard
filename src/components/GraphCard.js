import React, { useState, useEffect } from "react";
import Graph from "./Graph";
import { GraphContainer, TitleContainer } from "./../styles/graph";

function GraphCard() {
  // const labelDates = [
  //   "2017-1-1",
  //   "2017-2-1",
  //   "2017-3-1",
  //   "2017-4-1",
  //   "2017-5-1",
  //   "2017-6-1",
  // ];
  const graphData = [
    { x: "2017-1-1", y: 1500 },
    { x: "2017-2-2", y: 1250 },

    { x: "2017-3-15", y: 2000 },
    { x: "2017-4-1", y: 1900 },
    { x: "2017-5-5", y: 2000 },

    { x: "2017-6-1", y: 1800 },
  ];

  const calculateRange = () => {
    let year = Number(graphData[0].x.split("-")[0]);
    console.log(year);
    let month = Number(graphData[0].x.split("-")[1]);

    let range = [];
    let numberOfMonths = 6;

    for (let i = 0; i < numberOfMonths; i++) {
      range.push(`${year}-${month}-1`);
      if (month >= 12) {
        year++;
        month = 1;
      } else {
        month++;
      }
    }
    return range;
  };

  return (
    <GraphContainer>
      <TitleContainer>
        <img src="/images/recycling.png" alt="recycling" />
        <h5>Recovered</h5>
      </TitleContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <Graph labelDates={calculateRange()} graphData={graphData} />
      </div>
    </GraphContainer>
  );
}

export default GraphCard;
