import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 20px; /* Increased height */
  background-color: #f8f9fa;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  border-bottom: 4px solid #ffcc00; /* Keeps the thickness at 4px */
  display: inline-block; /* Makes the border only as long as the text */
  padding-bottom: 5px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Adjusted spacing between cards */
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px; /* Increased padding for a larger feel */
  width: 300px; /* Adjusted width for a more prominent card size */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 3rem; /* Adjusted size for icons */
  color: #ffcc00; /* Yellow theme color */
  margin-bottom: 15px;

  &:hover {
    color: #ff9900; /* Subtle hover effect */
  }
`;

const FeatureText = styled.p`
  font-size: 1.2rem; /* Slightly larger font for better readability */
  color: #555;
`;

function WhyChooseUs() {
  const features = [
    { icon: <i className="fas fa-dollar-sign"></i>, text: "Affordable Prices" },
    {
      icon: <i className="fas fa-shipping-fast"></i>,
      text: "Fast & Reliable Service",
    },
    { icon: <i className="fas fa-leaf"></i>, text: "Eco-Friendly Practices" },
    {
      icon: <i className="fas fa-star"></i>,
      text: "Highly Rated Professionals",
    },
  ];

  return (
    <Section>
      <Title>Why Choose Us?</Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <Icon>{feature.icon}</Icon>
            <FeatureText>{feature.text}</FeatureText>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Section>
  );
}

export default WhyChooseUs;
