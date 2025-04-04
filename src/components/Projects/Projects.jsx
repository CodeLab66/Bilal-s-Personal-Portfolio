import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  background: #010606;
  padding: 100px 0;
`;

const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ProjectsHeading = styled(motion.h2)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  background: #01bf71;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #01bf71;
  font-size: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Cybersecurity System',
      description: 'Detects DDoS, port scanning, brute force attacks using AI models. Built with Polar, PySpark, MySQL.',
      tech: ['AI', 'PySpark', 'MySQL', 'Cybersecurity'],
      status: 'Ongoing'
    },
    {
      title: 'Shopify Store Development',
      description: 'Custom Shopify store with advanced e-commerce features, payment gateways, and responsive design.',
      tech: ['Shopify', 'E-commerce', 'Web Development'],
      status: 'Ongoing'
    },
    {
      title: 'Perfume Brand Mobile App',
      description: 'E-commerce app with cart, user accounts, admin panel, and Stripe payments.',
      tech: ['Flutter', 'Firebase', 'Stripe'],
      status: 'Completed'
    },
    {
      title: 'Advanced Coffee Shop Website',
      description: 'Fully functional site with menu management, user accounts, and order system.',
      tech: ['Django', 'MySQL', 'Web Development'],
      status: 'Completed'
    },
    {
      title: 'Mini Excel Application',
      description: 'Spreadsheet-like app with linked lists, formulas, and file handling.',
      tech: ['C++', 'Qt', 'Desktop Development'],
      status: 'Completed'
    },
    {
      title: 'DOS-like File Management System',
      description: 'Simulates file directory system with commands (ATTRIB, CD, COPY, DEL, DIR, EDIT).',
      tech: ['C++', 'File System', 'CLI'],
      status: 'Completed'
    },
    {
      title: 'Chess & Ludo Games',
      description: 'AI-powered Chess & Ludo games with interactive gameplay.',
      tech: ['C++', 'Game Development', 'AI'],
      status: 'Completed'
    },
    {
      title: 'APT Detection Tool',
      description: 'Uses SIEM & Databricks to detect Advanced Persistent Threats (APTs).',
      tech: ['SIEM', 'Databricks', 'Cybersecurity'],
      status: 'Completed'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </ProjectsHeading>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;