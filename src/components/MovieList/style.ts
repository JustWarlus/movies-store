import styled from "styled-components";

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 1840px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

const ButtonConainer = styled.div`
  width: 100%;
  margin: 40px 0 0;
`;

export { StyledMovieList, ButtonConainer };
