import React from "react";
import {
  InfoContainer,
  TileContainer,
  TileHeader,
  DateContainer,
  RecoveredTitle,
} from "./../styles/info";

function Info() {
  return (
    <InfoContainer>
      <DateContainer>
        <img src="/images/calendar.png" alt="calender" />
        <h4>
          <span>Tuesday 27,</span> March, 2021
        </h4>
      </DateContainer>
      <TileContainer>
        <TileHeader>
          <img src="/images/trr.png" alt="T.R.R" />
          <h5>T.R.R.</h5>
        </TileHeader>
        <h3>280</h3>
      </TileContainer>

      <TileContainer>
        <TileHeader>
          <img src="/images/recycling.png" alt="recycling" />
          <h5>Recovered</h5>
        </TileHeader>
        <RecoveredTitle>
          375 <span>Kg.</span>
        </RecoveredTitle>
      </TileContainer>
    </InfoContainer>
  );
}

export default Info;
