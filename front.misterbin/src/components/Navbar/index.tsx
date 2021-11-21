import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Nav>
      <Link to={"/"}>
              {/* <BrandLogo
          src={"./static/images/logo/onruntime.svg"}
          draggable={false}
          height={48}
          width={48}
        /> */}
              MisterBin
            </Link>
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
  justify-content:space-between;
  /* @media screen and (min-width: 537px) {
    width: 88%;  
    justify-content:space-between;
  } */
  /* @media screen and (max-width: 537px) {
    width: 88%;  
    justify-content:center;
  } */
`;

// const BrandLogo = styled.img`
//   height: 30px;
//   width: auto;
//   transform: scale(0.75);
// `;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  white-space: nowrap;
  margin-right: 25px;
  @media screen and (min-width: 294px) {
    margin:0px;
    padding: 0px;
    overflow-x: auto;
  overflow-y: hidden;
  }
`;

const NavItem = styled.span`
  /* display: flex;
justify-content:space-between;
margin: 0 15px;
  :first-child {
    margin-right: 220px;
  }
  :last-child {
    margin-right: 0;
  } */
`;

const Link = styled(NavLink)`
  position: relative;
  /* color: rgb(255, 255, 255); */
  color: #302225;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 354px) {
    margin-left:5px;
  }
`;

export default Navbar;
