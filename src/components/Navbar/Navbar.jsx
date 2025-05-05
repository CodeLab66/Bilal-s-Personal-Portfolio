import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: rgba(6, 66, 2, 0.51);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Dancing Script', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding-top: 30px;
  }
`;

const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    display: block;
    text-align: center;

    &.active {
      border-bottom: none;
      color: #01bf71;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="home" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
            Portfolio
          </Link>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="certifications" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
              Certifications
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offest={-120}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;