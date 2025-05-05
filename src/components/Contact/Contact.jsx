import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';

const ContactContainer = styled.div`
  background: #010606;
  padding: 100px 0;
`;

const ContactWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeading = styled(motion.h2)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 600px;
  width: 100%;
`;

const ContactText = styled(motion.p)`
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const ContactLink = styled(motion.a)`
  color: #01bf71;
  font-size: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border: 2px solid #01bf71;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #01bf71;
    color: #010606;
    transform: scale(1.05);
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </ContactHeading>
        <ContactContent>
          <ContactText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </ContactText>
          <ContactLinks>
            <ContactLink
              href="mailto:codelab.bilal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaEnvelope /> Email
            </ContactLink>
            <ContactLink
              href="https://github.com/CodeLab66"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaGithub /> GitHub
            </ContactLink>
            <ContactLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FaGlobe /> Portfolio
            </ContactLink>
          </ContactLinks>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;