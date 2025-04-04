import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate, FaGithub, FaWordpress, FaMobileAlt, FaMicrochip } from 'react-icons/fa';

const CertificationsContainer = styled.div`
  background: #010606;
  padding: 100px 0;
`;

const CertificationsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const CertificationsHeading = styled(motion.h2)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const CertificationCard = styled(motion.div)`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: scale(1.02);
    background: #222;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #01bf71;
  margin-bottom: 20px;
`;

const CertificationTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
`;

const CertificationDescription = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
`;

const Certifications = () => {
  const certifications = [
    {
      icon: <FaGithub />,
      title: 'Git & GitHub',
      description: 'Professional version control & deployment'
    },
    {
      icon: <FaCertificate />,
      title: 'AI & Machine Learning',
      description: 'Training models for attack detection'
    },
    {
      icon: <FaWordpress />,
      title: 'WordPress & Shopify',
      description: 'E-commerce web development'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Advanced Flutter widgets'
    },
    // {
    //   icon: <FaMicrochip />,
    //   title: 'Arduino & Tinkercad',
    //   description: 'Teaching beginners about electronics'
    // }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <CertificationsContainer id="certifications">
      <CertificationsWrapper>
        <CertificationsHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Learning
        </CertificationsHeading>
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper>{cert.icon}</IconWrapper>
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationDescription>{cert.description}</CertificationDescription>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsWrapper>
    </CertificationsContainer>
  );
};

export default Certifications;