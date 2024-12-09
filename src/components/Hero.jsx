import React from "react";
import styled from "styled-components";
import fulltruck from "../assets/fulltruck.webp"; // Import the background image

const HeroSection = styled.section`
  position: relative; /* Allows absolute positioning of text */
  background: url(${fulltruck}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    background-position: center top; /* Adjust background for smaller screens */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for better text contrast */
  z-index: 1; /* Ensure it's behind the text but above the background */
`;

const Content = styled.div`
  position: relative;
  z-index: 2; /* Ensure the text is above the overlay */
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ffcc00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add shadow for better contrast */

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Scale down for smaller screens */
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Subtle shadow */

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Scale down for smaller screens */
  }
`;

const CTAButton = styled.button`
  padding: 10px 16px; /* Reduced padding for smaller buttons */
  font-size: 1rem; /* Slightly smaller font size */
  color: #333;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  max-width: 200px; /* Limit the maximum width of the button */
  align-self: center; /* Center buttons when in column layout */

  &:hover {
    background-color: #ff9900;
    transform: scale(1.05); /* Subtle hover effect */
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Further adjust size for smaller screens */
    padding: 8px 14px;
  }
`;

const TransparentCTAButton = styled.a`
  display: inline-block;
  text-align: center;
  padding: 4px 14px;
  font-size: 1rem; /* Slightly smaller font size */
  color: white; /* Text color matches the theme */
  background-color: transparent; /* Transparent background */
  border: 2px solid #ffcc00; /* Yellow border for visibility */
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  max-width: 200px; /* Limit the maximum width of the button */
  align-self: center; /* Center buttons when in column layout */
  text-decoration: none; /* Remove underline */

  &:hover {
    background-color: rgba(
      255,
      204,
      0,
      0.2
    ); /* Subtle yellow overlay on hover */
    transform: scale(1.05); /* Subtle hover effect */
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function Hero() {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <Title>Quick and Clean</Title>
        <Subtitle>Clear your space with ease. We’re here to help!</Subtitle>
        <ButtonContainer>
          <CTAButton>Get a Free Quote</CTAButton>
          <TransparentCTAButton href="tel:2091231234">
            209-123-1234
          </TransparentCTAButton>
        </ButtonContainer>
      </Content>
    </HeroSection>
  );
}

export default Hero;
