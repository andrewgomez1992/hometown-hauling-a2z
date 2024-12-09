import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import styled from "styled-components";
import Testimonials from "./components/Testimonials";
import StickyMessageButton from "./components/StickyButton";
import Modal from "./components/Modal";

// Add scroll-margin-top to sections
const Section = styled.div`
  scroll-margin-top: 80px; /* Adjust this to match your navbar height */
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Navbar />
      <Section id="home">
        <Hero />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="whychooseus">
        <WhyChooseUs />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="contact">
        <Footer />
      </Section>
      <StickyMessageButton onClick={openModal} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default App;
