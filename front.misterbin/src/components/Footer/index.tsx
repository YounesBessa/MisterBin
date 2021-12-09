import styled from "styled-components";

const Footer: React.FC = () => {

  return (
    <Container><Copyright>© Mister Bin - Tous droits réservés<br/> Projet Need for School 2.1<br/></Copyright></Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 60px;
  margin: 0 auto;
  align-items: center;
  user-select: none;
  background-color: #6ede8a;
  border-bottom: 1px solid black;
  justify-content:space-between;
  margin-top: 80px;
  padding-top: 30px;
  padding-bottom: 30px;
`

const Copyright = styled.p`
width:100%;
text-align:center;
line-height:1.5`

export default Footer;