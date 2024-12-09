import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
    border-bottom: 2px solid #ffcc00;
    padding-bottom: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
  }
`;

const DateInput = styled(Input)`
  appearance: none; /* Hide native date picker styling */
  background-color: #f8f9fa;
  color: #333;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff9900;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

function Modal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close Modal">
          &times;
        </CloseButton>
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" required />
          <Input type="tel" placeholder="Phone Number" required />
          <DateInput type="date" placeholder="Desired Date" required />
          <TextArea placeholder="Your Message" rows="4" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
