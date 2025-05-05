import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  background: linear-gradient(135deg,rgb(51, 50, 50) 0%,rgb(21, 19, 19) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(1, 191, 113, 0.1) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled(motion.h1)`
  color: #ffffff;
  font-size: 64px;
  text-align: center;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroP = styled(motion.p)`
  color: #f7f7f7;
  font-size: 26px;
  text-align: center;
  max-width: 700px;
  margin-bottom: 35px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroLocation = styled(motion.p)`
  color: #01bf71;
  font-size: 24px;
  text-align: center;
  margin-bottom: 64px;
  letter-spacing: 1px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, transparent 20%, #0c0c0c 70%);
  opacity: 0.1;
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <BackgroundAnimation
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <HeroContent>
        <HeroH1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hey!! I'm Muhammad Bilal
        </HeroH1>
        <HeroLocation
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Computer Science | Information Technology University, Lahore, Pakistan
        </HeroLocation>
        <HeroP
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Computer Science Student & Software Developer
        </HeroP>
        <HeroP
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Passionate about building intelligent systems, scalable web applications, mobile applications and e-commerce solutions
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;