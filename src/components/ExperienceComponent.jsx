import { motion } from "framer-motion";
import React from "react";

import styled from "styled-components";

const Container = styled(motion.div)`
  width: calc(13rem + 15vw);
  height: auto;
  padding: 2rem;
  border: 2px solid black;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  &:hover {
    color: white;
    background-color: black;
  }
  transition: all 0.3s ease;
`;
const Title = styled.h1`
  color: inherit;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  cursor: pointer;
`;
const Date = styled.h4`
  color: rgb(220, 45, 68);
  margin-top: 5px;
`;
const Job = styled.h3`
  margin-top: 20px;
`;

const Role = styled.h2`
  margin-top: 40px;
`;
const Items = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ExperienceComponent = (props) => {
  const { title, date, job, description } = props.item;
  return (
    <React.Fragment>
      <Container variants={Items}>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Job>{job}</Job>
        <Role>{description}</Role>
      </Container>
    </React.Fragment>
  );
};

export default ExperienceComponent;
