import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
  img {
    width: 270px;
    object-fit: contain;
    margin: 0 35px;
    @media (min-width: 1024px) {
      margin: 25px;
    }
  }
  h1 {
    color: rgb(181, 180, 190);
    letter-spacing: 6px;
    margin: 15px 45px;
    @media (min-width: 1024px) {
      margin: 25px 45px;
      font-size: 2.7rem;
      font-weight: 400;
    }
    font-weight: 600;
  }
`;
