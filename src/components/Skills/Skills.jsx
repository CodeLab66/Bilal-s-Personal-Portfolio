import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGamepad, FaLaptopCode, FaMobileAlt, FaRobot, FaShieldAlt } from 'react-icons/fa';

const SkillsContainer = styled.div`
  background: #010606;
  padding: 100px 0;
`;

const SkillsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SkillsHeading = styled(motion.h2)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const SkillCategory = styled(motion.div)`
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

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
`;

const CategoryIcon = styled.div`
  color: #01bf71;
  font-size: 24px;
`;

const CategoryTitle = styled.h3`
  color: #fff;
  font-size: 24px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  color: #fff;
  margin: 10px 0;
  display: flex;
  align-items: center;

  &:before {
    content: '✔';
    color: #01bf71;
    margin-right: 10px;
  }
`;

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'Dart', 'JavaScript', 'C#']
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Django', 'MySQL', 'WordPress', 'Shopify', 'React (Learning)']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Firebase']
    },
    {
      icon: <FaRobot />,
      title: 'AI & Data Science',
      skills: ['PySpark', 'Numpy', 'Polar', 'Seaborn', 'Pandas']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      skills: ['AI-based Threat Detection', 'SIEM']
    },
    {
      icon: <FaDatabase />,
      title: 'Databases & DevOps',
      skills: ['MySQL', 'Git', 'GitHub']
    },
    {
      icon: <FaDatabase/>,
      title: 'Ui/Ux Design',
      skills: ['Figma']
    },
    {
      icon: <FaGamepad />,
      title: 'Game Development',
      skills: ['C++', 'Python']
    }
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsWrapper>
        <SkillsHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </SkillsHeading>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;