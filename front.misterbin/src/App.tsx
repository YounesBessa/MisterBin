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
      <Button>Commencer</Button>
        {/* <Image src="../public/static/images/recycle.png" alt="" width={3200}height={23}/> */}
      </Card>
      </Featured>
      </Body> 
      <Wave/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background-color:#6EDE8A;
font-family:'Montserrat-Light';
`

const Body = styled.div`
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
box-shadow: 0px 4px 25px 5px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-family: 'Montserrat-Light';
font-size: larger;
`


export default App;
