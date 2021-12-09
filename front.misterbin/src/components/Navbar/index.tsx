import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Link to={"/"}>MisterBin</Link>
        <NavList>
          <NavItem>
            <Link to={"/"}>Accueil</Link>
          </NavItem>
          <NavItem>
            <Link to={"/map"}>Voir les villes</Link>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
};

const Container = styled.div``;

const Nav = styled.nav`
  display: flex;
  height: 60px;
  margin: 0 auto;
  align-items: center;
  user-select: none;
  background-color: #6ede8a;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding-right: 25px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  white-space: nowrap;
  margin-right: 25px;

  @media screen and (max-width: 290px) {
    margin: 0px;
    padding: 0px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const NavItem = styled.span``;

const Link = styled(NavLink)`
  position: relative;
  color: #302225;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
  :hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 1224px) {
    font-size: 20px;
  }
  @media screen and (max-width: 354px) {
    margin-left: 5px;
  }
`;

export default Navbar;
