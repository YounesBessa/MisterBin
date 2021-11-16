import styled from "styled-components";

const Navbar: React.FC = () => {

  return (
    <Container>
      <Brand href={"#"}>
        {/* <BrandLogo
          src={"./static/images/logo/onruntime.svg"}
          draggable={false}
          height={48}
          width={48}
        /> */}
        <BrandTitle>MisterBin</BrandTitle>
      </Brand>
      <Nav>
        <NavItem>
          <NavLink href={"#"}>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={"#"}>
            About
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  height: 60px;
  padding: 0 15px;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  background-color: #6EDE8A;
`;

const Brand = styled.a`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  filter: brightness(0.75);
  transition: all 0.2s;
  :hover {
    filter: brightness(1);
  }
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
`;

const NavItem = styled.li`
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
`;

export default Navbar;