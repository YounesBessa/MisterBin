import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Card from "./components/Card";
import Wave from "./components/Wave";
// import Image from "./components/Image";

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
      <Image
          src="../public/static/images/recycle.png"
          alt="aaaa"
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
background-color:#6EDE8A;`

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
` 

const Image= styled.img``

const Button= styled.button`
background-color:lime;
width:236px;`


export default App;
