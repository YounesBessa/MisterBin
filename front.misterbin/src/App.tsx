import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Wave from "./components/Wave";
import Image from "./components/Image";

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Body>
      <GreenContainer>
        <Featured>
      <Title>
      Trouvez la benne à verre la plus proche de chez vous avec MisterBin
      </Title>
      <Card>
      <Picture
          src="/static/images/recycle.png"
          alt="Logo recyclage"
          width={120}
          height={120}
        />
      <Button>COMMENCER</Button>
        {/* <Image src="../public/static/images/recycle.png" alt="" width={3200}height={23}/> */}
      </Card>
      </Featured>
      </GreenContainer> 
      <Wave/>
      </Body>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background-color:#6EDE8A;
font-family:'Montserrat-Light';
/* color: #222222; */
color: #302225;
`

const Body = styled.div``

const GreenContainer = styled.div`
display: flex;
justify-content: center;
margin: 0 130px;
`

const Featured = styled.div`
display:flex;
justify-content:space-evenly;
`

const Title = styled.h1`
text-align: center;
width: 35%;
font-weight: 400;
` 

const Picture = styled(Image)`
margin-bottom: 40px;
`

const Button= styled.button`
background-color:#008000;
color: white;
width:157px;
height: 50px;
outline: none;
border: 1px solid #008000;
border-radius: 10px;
font-family: 'Montserrat-Light';
font-size: larger;
cursor: pointer;
:hover{
  background-color: white;
  color:#008000;
  transition: all 0.2s;
}
`


export default App;
