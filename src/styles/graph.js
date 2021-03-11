import styled from "styled-components";

export const GraphContainer = styled.div`
  min-height: 35vh;

  padding: 10px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 92%;
  margin: 10px auto;
`;

export const TitleContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    object-fit: contain;
    margin: 0 10px;
  }

  h4 {
    color: rgb(104, 104, 123);
  }
`;
