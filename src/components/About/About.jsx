import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
  background: #010606;
  padding: 100px 0;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const AboutHeading = styled(motion.h2)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`;

const AboutCard = styled(motion.div)`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    background: #222;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #01bf71;
  margin-bottom: 1rem;
`;

const AboutCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const AboutCardText = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </AboutHeading>
        <AboutContent>
          <AboutCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <AboutCardTitle>Software Development</AboutCardTitle>
            <AboutCardText>
              Proficient in multiple programming languages including C++, Python, JavaScript, and C#.
              Experienced in building scalable applications and solving complex problems.
            </AboutCardText>
          </AboutCard>

          <AboutCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <AboutCardTitle>Web Development</AboutCardTitle>
            <AboutCardText>
              Skilled in full-stack web development using modern technologies like React, Django, and various
              databases. Experience in creating responsive and user-friendly interfaces.
            </AboutCardText>
          </AboutCard>

          <AboutCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <AboutCardTitle>AI & Cybersecurity</AboutCardTitle>
            <AboutCardText>
              Focused on implementing AI-based security solutions and threat detection systems.
              Experience with SIEM and advanced persistent threat detection.
            </AboutCardText>
          </AboutCard>

          <AboutCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <FaMobileAlt />
            </IconWrapper>
            <AboutCardTitle>Mobile Development</AboutCardTitle>
            <AboutCardText>
              Experienced in mobile app development using Flutter and Firebase.
              Created e-commerce solutions and various mobile applications.
            </AboutCardText>
          </AboutCard>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;