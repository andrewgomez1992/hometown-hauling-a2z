import React, { useState, useEffect } from "react";
import styled from "styled-components";
import trucklogo from "../assets/trucklogo.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "#fff" : "transparent"};
  color: ${({ $isScrolled }) => ($isScrolled ? "#333" : "white")};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffcc00;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
      display: none;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #000;
    padding: 20px;
    gap: 10px;
    border-top: 1px solid #555;
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: ${({ $isScrolled }) => ($isScrolled ? "#333" : "white")};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    color: white;
  }
`;

const PhoneIcon = styled.a`
  font-size: 1.5rem;
  color: #ffcc00;
  margin-left: 20px; /* Adds spacing from other items */
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #ffcc00;
  transition: background-color 0.3s;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      {/* Clickable logo container */}
      <LogoContainer $isScrolled={isScrolled} onClick={handleScrollToTop}>
        <h1>Hometown Hauling A2Z</h1>
        <img src={trucklogo} alt="logo" />
      </LogoContainer>

      {/* Main Navigation */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLinks $isOpen={isOpen}>
          <NavLink
            $isScrolled={isScrolled}
            onClick={() => handleScrollToSection("home")}
          >
            Home
          </NavLink>
          <NavLink
            $isScrolled={isScrolled}
            onClick={() => handleScrollToSection("services")}
          >
            Services
          </NavLink>
          <NavLink
            $isScrolled={isScrolled}
            onClick={() => handleScrollToSection("whychooseus")}
          >
            Why Choose Us
          </NavLink>
        </NavLinks>

        {/* Always Visible Phone Icon */}
        <PhoneIcon
          $isScrolled={isScrolled}
          href="tel:5551234567"
          aria-label="Call Us"
        >
          <i className="fas fa-phone"></i>
        </PhoneIcon>

        {/* Hamburger Menu */}
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <Bar $isOpen={isOpen} />
          <Bar $isOpen={isOpen} />
          <Bar $isOpen={isOpen} />
        </Hamburger>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
