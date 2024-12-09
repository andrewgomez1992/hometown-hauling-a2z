import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffcc00;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #ffcc00;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ffcc00;
    }
  }
`;

function FooterComponent() {
  return (
    <Footer>
      <FooterRow>
        {/* Quick Links */}
        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <Link href="#services">Services</Link>
          <Link href="#whychooseus">Why Choose Us</Link>
          <Link href="#contact">Contact</Link>
        </FooterColumn>

        {/* Contact Info */}
        <FooterColumn>
          <ColumnTitle>Contact Us</ColumnTitle>
          <FooterText>Email: support@hometowna2z.com</FooterText>
          <FooterText>Phone: (555) 123-4567</FooterText>
        </FooterColumn>

        {/* Social Media */}
        <FooterColumn>
          <ColumnTitle>Follow Us</ColumnTitle>
          <SocialIcons>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterRow>

      <FooterText>
        &copy; {new Date().getFullYear()} Hometown Hauling A2Z. All Rights
        Reserved.
      </FooterText>
    </Footer>
  );
}

export default FooterComponent;
