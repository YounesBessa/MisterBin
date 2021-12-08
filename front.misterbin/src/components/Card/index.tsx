import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const Card: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin: 0 70px;
  position: relative;
  background: linear-gradient(
    145.56deg,
    rgba(238, 238, 238, 0.6) 2.7%,
    rgba(238, 238, 238, 0.2) 50%
  );
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
  z-index: 5;
  @media screen and (max-width: 1080px) {
    margin: 0 52px;
  }

  @media screen and (max-width: 972px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 900px) {
    margin: 0 35px;
  }

  @media screen and (max-width: 870px) {
    margin: 0 30px;
  }

  @media screen and (max-width: 840px) {
    margin: 0 25px;
  }

  @media screen and (max-width: 810px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 780px) {
    margin: 0 15px;
  }

  @media screen and (max-width: 767px) {
    margin: 30px 0;
  }
`;

export default Card;
