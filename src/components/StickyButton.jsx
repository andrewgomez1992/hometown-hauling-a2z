import React from "react";
import styled from "styled-components";

const StickyButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffcc00;
  color: #333;
  padding: 15px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #ff9900;
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 15px; /* Reduce padding for smaller screens */
    border-radius: 50%; /* Circular button on mobile */
  }
`;

const Icon = styled.i`
  font-size: 1.5rem; /* Larger icon for better visibility */
`;

const Text = styled.span`
  @media (max-width: 768px) {
    display: none; /* Hide text on smaller screens */
  }
`;

function StickyMessageButton({ onClick }) {
  return (
    <StickyButton onClick={onClick}>
      <Icon className="fas fa-comment-dots" /> {/* Modern message icon */}
      <Text>Message Us</Text>
    </StickyButton>
  );
}

export default StickyMessageButton;
