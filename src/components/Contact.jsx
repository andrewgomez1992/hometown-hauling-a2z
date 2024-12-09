import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 80px 50px;
  background-color: #007bff;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  color: #333;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ff9900;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <Title>Contact Us</Title>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;
