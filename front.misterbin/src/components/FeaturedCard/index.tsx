import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const FeaturedCard: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background: linear-gradient(
    145.56deg,
    rgba(238, 238, 238, 0.6) 2.7%,
    rgba(238, 238, 238, 0.2) 97.86%
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
  z-index: 3;
  position: relative;
  top: 40px;
  margin: 0 20px;
  @media screen and (max-width: 767px) {
    margin: 30px 0;
  }
  @media screen and (max-width: 779px) {
    width: 190px;
  }
`;

export default FeaturedCard;
