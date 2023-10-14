import styled from "styled-components";

const DashBoardHead = () => {
  return (
    <div>
      <Container>DashBoardHead</Container>
    </div>
  );
};

export default DashBoardHead;

const Container = styled.div`
  display: flex;
  width: calc(100% - 250px);
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 40px;
  height: 90px;
  color: white;
  background-color: blue;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  border-bottom: 1px solid #e4e3e3;
  z-index: 3;
`;
