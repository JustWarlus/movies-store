import styled from "styled-components";

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
`;

const ButtonConainer = styled.div`
  grid-area: 3 / 3 / 3 / 6;
`;

export { StyledMovieList, ButtonConainer };
