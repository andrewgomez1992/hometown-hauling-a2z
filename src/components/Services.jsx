import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 4px solid #ffcc00; /* Keeps the thickness at 4px */
  display: inline-block; /* Makes the border only as long as the text */
  padding-bottom: 5px; /* Adds spacing between the text and border */
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 3rem; /* Adjust size of the icons */
  color: #ffcc00; /* Matches the theme's yellow color */
  margin-bottom: 15px;

  &:hover {
    color: #ff9900; /* Subtle hover effect */
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

function Services() {
  const services = [
    {
      icon: <i className="fas fa-home"></i>,
      title: "Residential Junk Removal",
      description: "Clear out unwanted household items.",
    },
    {
      icon: <i className="fas fa-building"></i>,
      title: "Commercial Junk Removal",
      description: "Keep your office clutter-free.",
    },
    {
      icon: <i className="fas fa-tools"></i>,
      title: "Construction Debris",
      description: "Efficiently handle construction waste.",
    },
    {
      icon: <i className="fas fa-tree"></i>,
      title: "Yard Waste Removal",
      description: "Beautify your outdoor space.",
    },
  ];

  return (
    <Section>
      <Title>Our Services</Title>
      <Grid>
        {services.map((service, index) => (
          <Card key={index}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Description>{service.description}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Services;
