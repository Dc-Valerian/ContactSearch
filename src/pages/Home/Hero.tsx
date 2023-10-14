import styled from "styled-components";
import img from "../../assets/image2.jpg"


const Hero = () => {
  return (
    <div>
        <Container>
    <One>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil in voluptatibus cum, inventore sit laborum similique adipisci dicta perspiciatis.
    </One>
    <Two>
        <Pic src={img}/>
    </Two>
        </Container>
    </div>
  )
}

export default Hero;
const Pic = styled.img`
width:100%;
height:100%;
object-fit: cover;
`

const Two = styled.div`
height: 100%;
width:50%;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
background-color: blanchedalmond;
`

const One = styled.div`
height: 100%;
width:50%;
display: flex;
align-items: center;
justify-content: center;
background-color: beige;
`


const Container = styled.div`
background-color: aliceblue;
height:500px;
width:100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`