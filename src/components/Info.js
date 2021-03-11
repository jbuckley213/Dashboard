import React from "react";
import {
  InfoContainer,
  TileContainer,
  TileHeader,
  DateContainer,
} from "./../styles/info";

function Info() {
  return (
    <InfoContainer>
      <DateContainer>
        <img src="/images/calendar.png" />
        <h4>Tuesday 27, March, 2021</h4>
      </DateContainer>
      <TileContainer>
        <TileHeader>
          <img src="/images/trr.png" />
          <h5>T.R.R.</h5>
        </TileHeader>
        <h3>280</h3>
      </TileContainer>

      <TileContainer>
        <TileHeader>
          <img src="/images/recycling.png" />
          <h5>Recovered</h5>
        </TileHeader>
        <h3>
          375 <span>Kg.</span>
        </h3>
      </TileContainer>
    </InfoContainer>
  );
}

export default Info;
