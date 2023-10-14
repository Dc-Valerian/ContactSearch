import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>CopyRight Reserved . Dc-Val PLC</Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
