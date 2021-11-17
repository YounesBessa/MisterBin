import styled from "styled-components";

const Navbar: React.FC = () => {

  return (
    <Container>
      <NavLink href={"#"}>
        {/* <BrandLogo
          src={"./static/images/logo/onruntime.svg"}
          draggable={false}
          height={48}
          width={48}
        /> */}
        <BrandTitle>MisterBin</BrandTitle>
      </NavLink>
      <Nav>
        <NavItem>
          <NavLink href={"#"}>
            Accueil
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={"#"}>
            Voir les villes
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  width: 88%;
  height: 60px;
  margin: 0 auto;
  /* padding: 0 80px; */
  align-items: center;
  user-select: none;
  justify-content: space-between;
  background-color: #6EDE8A;
  border-bottom: 1px solid black;
  margin-bottom: 90px;
`;


// const BrandLogo = styled.img`
//   height: 30px;
//   width: auto;
//   transform: scale(0.75);
// `;

const BrandTitle = styled.h1`
  /* position: absolute; */
  font-size: 18px;
  right: -350%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  margin-right: 25px;
`;

const NavItem = styled.span`
  margin: 0 15px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  position: relative;
  /* color: rgb(255, 255, 255); */
  color: black;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
  :hover{
    text-decoration: underline;
  }
`;

export default Navbar;