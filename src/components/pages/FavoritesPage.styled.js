import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTitle = styled.h2`
  font-size: 35px;
  margin-top: 100px;

  font-weight: 600;
  background-color: aliceblue;
  padding: 15px 15px;
  color: #3470ff;
`;
export const Message = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 40px;
  display: flex;
  flex-direction: column;
`;
export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 50px;
  font-size: 30px;
  color: #3470ff;
  text-decoration: underline;
`;
