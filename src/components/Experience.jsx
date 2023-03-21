import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import BigTitle from "../subComponent/BigTitle";
import LogoComponents from "../subComponent/LogoComponents";
import ParticleComponent from "../subComponent/ParticleComponent";
import PowerButton from "../subComponent/PowerButton";
import SocialIcons from "../subComponent/SocialIcons";
import ExperienceComponent from "./ExperienceComponent";
import img from "./patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

const Experiences = [
  {
    id: 1,
    title: "Tieby Tracking Services",
    date: "November 2022 - December 2022",
    job: "Intern - Frontend Development",
    description:
      "Developed and maintained complex web applications, integrated third party APIs and services into the websites increasing website functionality by 30%, developed and maintained documentations and training materials, conducted A/B testing and implemented website optimizations...",
  },
  {
    id: 2,
    title: "Foodly Company",
    date: "September 2022 - October 2022",
    job: "Intern - Frontend Development",
    description:
      "Used version control tools like Git and Github to manage codebase and collaborate with other developers, implemented accessibility features to ensure compliance with web accessibility standards, used Jira to track and manage project tasks and timelines, resulting in 15% missed deadlines...",
  },
];

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: auto;
`;
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 10rem;
  flex-direction: column;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Experience = () => {
  return (
    <React.Fragment>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <LogoComponents />
          <PowerButton />
          <SocialIcons />

          <Center>
            {Experiences.map((item) => {
              return <ExperienceComponent key={item.id} item={item} />;
            })}
          </Center>
          <BigTitle text="EXPERIENCE" top="5rem" left="5rem" />
        </Container>
      </MainContainer>
    </React.Fragment>
  );
};

export default Experience;
