import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaDatabase, FaDocker, FaAws, FaLinux, FaGit, FaGithub, FaNetworkWired, FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa';
import { SiFirebase, SiPostman, SiKubernetes, SiAnsible, SiTerraform, SiJenkins, SiNetlify, SiVisualstudiocode, SiTensorflow } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBootstrap } from "react-icons/fa6";
import { SiRedux,SiVite} from "react-icons/si";
import { faBrain, faCloud, faCogs } from '@fortawesome/free-solid-svg-icons';

const skills = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 color="#E44D26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Vite', icon: <FaBootstrap color="#61DAFB" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'ReactJS', icon: <FaReact color="#61DAFB" /> },
        { name: 'Redux', icon: <SiRedux color="#61DAFB" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#61DAFB" /> },
        
      ],
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
        { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
        { name: 'API', icon: <FaServer color="#6E5494" /> },
      ],
    },
    devops: {
      title: 'DevOps',
      skills: [
        { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
        { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
        { name: 'Ansible', icon: <SiAnsible color="#EE0000" /> },
        { name: 'Terraform', icon: <SiTerraform color="#844FBA" /> },
        { name: 'CI/CD Jenkins', icon: <SiJenkins color="#D24939" /> },
        { name: 'AWS', icon: <FaAws color="#FF9900" /> },
      ],
    },
    ai_ml: {
        title: 'AI & ML',
        skills: [
          { name: 'Generative AI', icon: <SiTensorflow color="#FF6F00" /> },
          { name: 'Machine Learning', icon: <FontAwesomeIcon icon={faBrain} color="#8E44AD" /> },
          { name: 'Deep Learning', icon: <FaRobot color="#3E8EDE" /> },
          { name: 'Hugging Face', icon: <FontAwesomeIcon icon={faCogs} color="#FFCC4D" /> },
        ],
      },
    other: {
      title: 'Other',
      skills: [
        { name: 'Networking', icon: <FaNetworkWired color="#008080" /> },
        { name: 'ServiceNow', icon: <FontAwesomeIcon icon={faCloud} color="#F04E30" /> },
        { name: 'Web Testing', icon: <FaLaptopCode color="#000000" /> },
        { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
        { name: 'System Design', icon: <FaLaptopCode color="#4CAF50" /> },
        { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode color="#007ACC" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Git', icon: <FaGit color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="#181717" /> },
      ],
    },
   
  };
  
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  max-width: 500px;
  min-width: 300px;
  height:auto;
  
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  height:auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <SkillsContainer>
        {Object.values(skills).map((category, index) => (
          <Skill key={index}>
            <SkillTitle>{category.title}</SkillTitle>
            <SkillList>
              {category.skills.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
