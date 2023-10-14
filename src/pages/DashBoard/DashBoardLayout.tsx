import styled from "styled-components";
import DashBoardHead from "./DashBoardHead";
import DashBoardSideBar from "./DashBoardSideBar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      <Container>
        <DashBoardHead />
        <DashBoardSideBar />

        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashBoardLayout;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  width: calc(100% - 250px);
  transition: all 360ms;
  display: flex;
  background-color: #f1f1f1;
  transition: all 500ms;
  margin-top: 90px;
  overflow-x: hidden;
`;
