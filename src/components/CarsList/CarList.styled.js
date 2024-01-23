import styled from "styled-components";

export const ListCarsStyled = styled.ul`
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 29px;
`;
export const LoadMore = styled.button`
  margin: 0 auto;
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  background-color: transparent;
  color: #3470ff;
  border: none;

  font-family: Manrope-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  cursor: pointer;
`;
