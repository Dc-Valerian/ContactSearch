import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
const DashBoardSideBar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to="/">
            <Image>
              <Pic src="https://demo.dashboardpack.com/marketing-html/img/logo.png" />
            </Image>
          </NavLink>

          <NavHolder>
            <Nav>
             <Hold> <Icon>
                <img src="https://demo.dashboardpack.com/marketing-html/img/menu-icon/dashboard.svg" />
              </Icon>
              <Text>DashBoard</Text></Hold>
              <Arrow>
                <FaAngleRight />
              </Arrow>
            </Nav>
          </NavHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashBoardSideBar;

const Hold = styled.div`
display: flex;
`;

const Arrow = styled.div``;

const Text = styled.text``;

const Icon = styled.div`
width:30px;
height:30px;
background-color: wheat;

`;

const Nav = styled.div`
background-color: indigo;
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
`;

const NavHolder = styled.div`
background-color: orange;
height: 50%;
`;

const Pic = styled.img``;

const Image = styled.div``;

const Wrapper = styled.div`
  height: 90%;
`;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 500ms;
  flex-direction: column;
  display: flex;
  align-items: center;
  color: black;
  z-index: 3;
  justify-content: center;
`;
