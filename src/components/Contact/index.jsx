import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree hooks

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 12px;
  width: 100%;
`;

const ContactInput = styled.input`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  background-color: black;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  background-color:black;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm('xyzkqawp'); // Replace with your Formspree form ID
  const [open, setOpen] = useState(false);

  if (state.succeeded) {
    return (
      <Container id='contact'>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Thanks for reaching out! I'll get back to you soon.</Desc>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact🚀</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactInput type="email" placeholder="Your Email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ContactInput type="text" placeholder="Your Name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <ContactInput type="text" placeholder="Subject" name="subject" required />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <ContactButton type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send'}
          </ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;