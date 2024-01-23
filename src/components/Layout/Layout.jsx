/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router-dom";
import {
  Container,
  Header,
  HeaderWrapper,
  LogoWrapper,
  Nav,
} from "./Layout.styled";
import CarLogo from "../../images/CarLogo";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Layout = () => {
  const loader = useSelector((state) => state.loader.isLoading);
  console.log(loader);
  if (loader) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <LogoWrapper>
              <CarLogo />
              <p>CarRent</p>
            </LogoWrapper>
            <Nav>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/catalog"}>Catalog</NavLink>
              <NavLink to={"/favorites"}>Favorites</NavLink>
            </Nav>
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          {loader && <Loader />}
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container>{/* <Footer /> */}</Container>
      </footer>
    </>
  );
};

export default Layout;
