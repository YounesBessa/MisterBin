import React from "react";
import styled from "styled-components";
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
              <Picture
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
            <SecondTitle>LISTE DES VILLES DISPONIBLES</SecondTitle>
            <CardContainer>
              <BottomCard>
                <CardTitle>TOULOUSE</CardTitle>
                <Button>VOIR</Button>
              </BottomCard>
              <BottomCard>
              <CardTitle>PARIS</CardTitle>
                <Button disabled>VOIR</Button>
              </BottomCard>
              <BottomCard>
              <CardTitle>LYON</CardTitle>
                <Button disabled>VOIR</Button>
              </BottomCard>
            </CardContainer>
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

const FeaturedCard = styled(Card)`
`;

const Title = styled.h1`
font-family: "Montserrat-Light";
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
`;
const SecondTitle = styled.h2`
font-family: "Kurale-Regular";
text-align: center;
font-weight: 400;
margin: 0px;
padding: 0;
height: fit-content;
text-decoration: underline;
`;

const CardContainer = styled.div`
display: flex;
height: fit-content;
width: 100%;
@media screen and (max-width: 767px) {
flex-direction: column;
align-items: center;
}

`;

const BottomCard = styled(Card)`
display: flex;
margin: 0 120px;
`;

const CardTitle = styled.p`
font-family: "Kurale-Regular";
text-align: center;
font-weight: 400;
font-size: 30px;
margin: 0px;
margin-bottom: 70px;
padding: 0;
height: fit-content;
`;

const Picture = styled(Image)`
margin-bottom: 40px;
`;

// const DisabledButton = styled(Button)`
//     background-color: grey;
//     :hover {
//     background-color: white;
//     color: grey;
//     transition: all 0.2s;
//     border-color: grey;
//   }
// `  


export default Home;
