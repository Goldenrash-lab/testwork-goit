import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const Header = styled.header`
  background-color: #3470ff;
  color: white;
`;
export const Nav = styled.nav`
  display: flex;
  /* justify-content: center; */
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  padding: 20px 10px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
  font-weight: 700;
  font-family: Nunito-Bold;
`;
