import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 60px 20px;
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

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  font-style: italic;
`;

const CustomerName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const Rating = styled.div`
  margin-top: 10px;
  color: #ffcc00; /* Matches the theme */
  font-size: 1.2rem;
`;

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Hometown A2Z helped me clear out my garage in no time! Fast and reliable service.",
      name: "John D.",
      rating: "★★★★★",
    },
    {
      quote:
        "I had a great experience with their team. Very professional and affordable prices.",
      name: "Sarah L.",
      rating: "★★★★☆",
    },
    {
      quote:
        "Highly recommend! They recycled most of my items and were super friendly.",
      name: "Emily W.",
      rating: "★★★★★",
    },
    {
      quote:
        "Great service! I'll definitely use them again for my yard waste removal.",
      name: "Mike R.",
      rating: "★★★★★",
    },
  ];

  return (
    <Section>
      <Title>What Our Customers Say</Title>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Quote>"{testimonial.quote}"</Quote>
            <CustomerName>{testimonial.name}</CustomerName>
            <Rating>{testimonial.rating}</Rating>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
}

export default Testimonials;
