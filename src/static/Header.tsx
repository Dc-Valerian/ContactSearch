import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Image>Valerian</Image>
          </NavLink>

          <NavHolder>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Contact</Nav>
            <Nav>Services</Nav>
          </NavHolder>
          <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
            <Button>Get Started</Button>
          </NavLink>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
  font-size: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  font-size: 20px;

  transition: all 350ms;
  &:hover {
    transform: scale(0.98);
    margin-left: 5px;
    color: #f15a22;
    cursor: pointer;
  }
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
`;
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

const Image = styled.div`
  font-size: 25px;
  font-weight: bold;
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    color: white;
    background-color: black;
    height: 40px;
    width: fit-content;
    padding: 8px 8px 8px 8px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  background-color: cyan;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
