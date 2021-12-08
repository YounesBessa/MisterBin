import React from "react";
import styled from "styled-components";
import FeaturedCard from "../FeaturedCard";
import Card from "../Card";
import Wave from "../Wave";
import Image from "../Image";
import Button from "../Button";

const Home: React.FC = () => {
  return (

<AppContainer>
      <Body>
        <GreenContainer>
          <Featured>
            <Title>
              Trouvez la benne à verre la plus proche de chez vous avec
              MisterBin
            </Title>
            <FeaturedCard>
              <Recycle
                src="/static/images/recycle.png"
                alt="Logo recyclage"
                width={120}
                height={120}
              />
              <Button>COMMENCER</Button>
            </FeaturedCard>
          </Featured>
        </GreenContainer>
        <Wave />
        <WhiteContainer>
          <BottomWrapper>
            <SecondTitleWrapper>
            <ImageContainer>
          <Ecologie
                src="/static/images/ecologie.svg"
                alt="Logo recyclage"
                width={120}
                height={120}
              />
          </ImageContainer>
            </SecondTitleWrapper>
            <SecondTitle>
          LISTE DES VILLES DISPONIBLES</SecondTitle>
            <CardWrapper>
              <LeftCardContainer>
              <BottomCard>
                <CardTitle>PARIS</CardTitle>
                <Button>VOIR</Button>
              </BottomCard>
              </LeftCardContainer>
              <CenterCardContainer>
              <BottomCard>
              <CardTitle>TOULOUSE</CardTitle>
                <Button disabled>VOIR</Button>
              </BottomCard>
              </CenterCardContainer>
              <RightCardContainer>
              <BottomCard>
              <CardTitle>LYON</CardTitle>
                <Button disabled>VOIR</Button>
              </BottomCard>
              </RightCardContainer>
            </CardWrapper>
          </BottomWrapper>
        </WhiteContainer>
      </Body>
    </AppContainer>
 );
}

const AppContainer = styled.div`
background-color: #6ede8a;
color: #302225;
`;

const Body = styled.div``;

const GreenContainer = styled.div`
display: flex;
justify-content: center;
margin: 0 130px;
`;

const WhiteContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 90px;
width: 100%;
background-color: white;
`;

const Featured = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: row;
@media screen and (max-width: 840px) {
flex-direction: column;
align-items: center;
}
`;

const Title = styled.h1`
margin-top: 100px;
text-align: center;
width: 30%;
font-weight: 400;
@media screen and (max-width: 375px) {
width: 70%;
}
@media screen and (max-width: 840px) {
width: 100%;
font-size: 30px;
}
`;

const BottomWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 100px;
`;

const ImageContainer = styled.span`
z-index: 2;
position: absolute;
left: -6%;
top: -30px;
z-index: 2;
animation: InfiniteRotation 20s linear infinite;
`

const SecondTitleWrapper = styled.div`
position:relative;
`

const SecondTitle = styled.h2`
text-align: center;
font-weight: 400;
margin: 0px;
padding: 0;
height: fit-content;
font-size: 50px;
position: relative;
z-index: 4;
::after{
  position: absolute;
  content: '';
  width: 480px;
  height: 2px;
  background: black;
  top: 100%;
  left: 54%;
}
`;

const CardWrapper = styled.div`
display: flex;
height: fit-content;
width: 100%;
margin-top: 100px;
@media screen and (max-width: 767px) {
flex-direction: column;
align-items: center;
}
`;

const LeftCardContainer = styled.div`
position: relative;
::before {
  position: absolute;
  content: '';
  width: 180px;
  height: 180px;
  background: #2DC653;
  z-index: 4;
  border-radius: 50%;
  top: -40px;
}
::after {
  position: absolute;
  content: '';
  width: 180px;
  height: 180px;
  background: linear-gradient(133.74deg, #70E000 44.13%, rgba(0, 128, 0, 0) 93.68%);
  z-index: 4;
  border-radius: 50%;
  bottom: -30px;
  right: 20px;
}
`

const CenterCardContainer = styled.div`
position: relative;
::before {
  position: absolute;
  content: '';
  width: 180px;
  height: 180px;
  background: #2DC653;
  z-index: 4;
  border-radius: 50%;
  top: -40px;
  right: 90px;
}
::after {
  position: absolute;
  content: '';
  width: 180px;
  height: 180px;
  background: linear-gradient(133.74deg, #70E000 44.13%, rgba(0, 128, 0, 0) 93.68%);
  z-index: 4;
  border-radius: 50%;
  bottom: -30px;
  right: 90px;
}
`

const RightCardContainer = styled.div`
position: relative;
::before {
  position: absolute;
  content: '';
  width: 150px;
  height: 150px;
  background: #2DC653;
  z-index: 4;
  border-radius: 50%;
  top: -40px;
  right: 20px;
}
::after {
  position: absolute;
  content: '';
  width: 180px;
  height: 180px;
  background: #70E000;
  background: linear-gradient(133.74deg, #70E000 44.13%, rgba(0, 128, 0, 0) 93.68%);
  z-index: 4;
  border-radius: 50%;
  bottom: -30px;
  left: 20px;
}

`

const BottomCard = styled(Card)`
position: relative;
position: relative;
background: linear-gradient(145.56deg, rgba(238, 238, 238, 0.6) 2.7%, rgba(238, 238, 238, 0.2) 50%);
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 220px;
height: 350px;
border-radius: 25px;
z-index:5;
`;

const CardTitle = styled.p`
text-align: center;
font-weight: 400;
font-size: 30px;
margin: 0px;
margin-bottom: 70px;
padding: 0;
height: fit-content;
`;

const Recycle = styled(Image)`
margin-bottom: 40px;
`;

const Ecologie = styled(Image)``;


export default Home;
