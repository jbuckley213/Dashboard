import styled from "styled-components";

export const GraphContainer = styled.div`
  min-height: 21vh;

  padding: 10px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 88%;
  margin: 10px auto;
  @media (min-width: 1024px) {
    padding: 10px 15px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (min-width: 1024px) {
    margin: 20px;
  }
  img {
    width: 30px;
    object-fit: contain;
    margin: 0 10px;
    @media (min-width: 1024px) {
      width: 50px;
    }
  }

  h5 {
    margin: 0px;
    font-size: 1.1rem;
    @media (min-width: 1024px) {
      margin: 0 10px;
      font-size: 2.3rem;
    }
  }
`;
