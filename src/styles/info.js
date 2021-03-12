import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 91%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  /* align-items: center; */
`;

export const TileContainer = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  flex-basis: 300px;
  border-radius: 5px;
  flex-grow: 1;
  margin: 10px 10px;
  height: 100px;
  padding: 10px;

  @media (min-width: 1024px) {
    max-width: 350px;
  }
  h3 {
    margin: 0;
    font-size: 2.3rem;
  }
  span {
    font-size: 1.3rem;
    color: grey;
  }
`;

export const RecoveredTitle = styled.h3`
  margin: 0;
  font-size: 2.3rem;
  position: relative;
  top: 0;
  left: 20px;
`;

export const TileHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    object-fit: contain;
    @media (min-width: 1024px) {
      width: 40px;
    }
  }
  h5 {
    margin: 0 10px;
    font-size: 1.1rem;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-basis: 300px;
  max-width: 350px;
  justify-content: space-around;
  margin: 20px 10px;
  margin-top: 0;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  flex-basis: 300px;
  padding: 10px;
  align-self: flex-end;
  font-weight: 600;
  @media (min-width: 1024px) {
    border: 0.5px solid rgba(0, 0, 0, 0.3);
  }

  span {
    font-weight: 900;
  }
  img {
    width: 10%;
    object-fit: contain;
  }
  h4 {
    font-size: 1rem;
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;
