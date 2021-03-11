import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;

  /* align-items: center; */
`;

export const TileContainer = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  flex-basis: 300px;
  border-radius: 5px;

  /* flex-grow: 1; */
  margin: 20px 10px;
  height: 100px;
  padding: 10px;
  h3 {
    margin: 0;
    font-size: 2.3rem;
  }
  span {
    font-size: 1.3rem;
    color: grey;
  }
`;

export const TileHeader = styled.div`
  display: flex;
  img {
    width: 40px;
    object-fit: contain;
  }
  h5 {
    margin: 0;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-grow: 1; */
  margin: 20px 10px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  flex-basis: 300px;
  padding: 10px;
  align-self: flex-end;

  img {
    width: 10%;
    object-fit: contain;
  }
`;
