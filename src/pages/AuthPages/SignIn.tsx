import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const SignIn = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Image>Valerian</Image>
          </NavLink>

          <Hold>
            Name
            <Input placeholder="Please Enter Your Name Here" />
          </Hold>
          <Hold>
            Email
            <Input type="text" placeholder="Please Enter Your Email Here" />
          </Hold>
          <Hold>
            Address
            <Input placeholder="Please Enter Your Address Here" />
          </Hold>
          <Hold>
            Year of Birth
            <select name="" id="">
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
            </select>
          </Hold>
       <NavLink
       to="/userdashboard" style={{ textDecoration: "none" }}
       >
       <Button>
            Continue
          </Button>
       </NavLink>
          <Text>
            Already Have an Account ..?
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <span>Login Then.!!</span>
            </NavLink>
          </Text>
        </Wrapper>
      </Container>  
    </div>
  );
};

export default SignIn;
const Button = styled.div`
background-color: white;
color:cyan;
display: flex;
align-items: center;
justify-content: center;
width:120px;
padding:10px 10px 10px 10px;
border-radius: 20px;
margin-top: 10px;

&:hover{
    color:white;
    background-color: cyan;
    cursor: pointer;
}
`

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
  margin-top: 30px;
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

const Text = styled.div`
  margin-top: 20px;
  span {
    color: red;
  }
`;

const Input = styled.input`
  height: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
  padding: 10px 10px 10px 10px;
`;

const Hold = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 10px;

  select {
    background-color: white;
    height: 50px;
    color: black;
    outline:none;
    border: none;
  padding: 10px 10px 10px 10px;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 85%;
  border-radius: 40px;
  background-color: cyan;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
