import styled from "styled-components";

const Card: React.FC = () => {

  return (
    <Container></Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 320px;
  height: 288px;
  /* margin: 0 auto; */
  /* padding: 0 80px; */
  margin-top: 70px;
  user-select: none;
  border-radius: 25px;
  /* justify-content: space-between; */
  background-color: white;
  opacity: 50%;
  border: 1px solid black;
`;

export default Card;