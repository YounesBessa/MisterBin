import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const Button: React.FC<Props> = ({ children }: Props) => {
  return <Container >{children}</Container>;
};

const Container = styled.button`
  background-color: #008000;
  color: white;
  width: 157px;
  height: 50px;
  outline: none;
  border: 1px solid #008000;
  border-radius: 10px;
  font-family: "Montserrat-Light";
  font-size: larger;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #008000;
    transition: all 0.2s;
  }
`;

export default Button;
