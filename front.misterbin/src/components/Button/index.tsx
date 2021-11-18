import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ children }: Props, disabled) => {
  return <Container >{children}</Container>;
};

const Container = styled.button`
  background-color: ${({ disabled }) => (disabled ? "grey" : "#008000")};
  color: white;
  width: 157px;
  height: 50px;
  outline: none;
  border: 1px solid ${({ disabled }) => (disabled ? "grey" : "#008000")};
  border-radius: 10px;
  font-family: "Montserrat-Light";
  font-size: larger;
  cursor: pointer;
  :hover {
    background-color: white;
    color: ${({ disabled }) => (disabled ? "grey" : "#008000")};
    transition: all 0.2s;
  }
`;

export default Button;
