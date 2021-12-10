import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const Button: React.FC<Props> = ({ children }: Props) => {
  return <Container >{children}</Container>;
};

const Container = styled.button`
  background-color: grey;
  color: white;
  width: 157px;
  height: 50px;
  outline: none;
  border: 1px solid grey;
  border-radius: 10px;
  font-family: "Montserrat-Light";
  font-size: larger;
  cursor: not-allowed;
  :hover {
    background-color: white;
    color: grey;
    transition: all 0.2s;
  }
`;

export default Button;
