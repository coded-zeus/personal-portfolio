import { motion } from "framer-motion";
import React from "react";
import { GrGithub } from "react-icons/gr";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid black;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding: top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  
  ${Box}:hover &{
    border-top: 2px solid ${(props) => props.theme.text}
  }
`;

const Git = styled.div`
  & > * {
    color: black;
  }
  ${Box}:hover & {
    & > * {
      color: white;
    }
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Linked = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
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

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.item;

  return (
    <React.Fragment>
      <Box key={id} variants={Items}>
        <Title>{name}</Title>
        <Description>{description} </Description>
        <Tags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </Tags>
        <Footers>
          <Linked href={demo} target="_blank">
            Visit
          </Linked>
          <Git>
            <a target="_blank" href={github}>
              <GrGithub size={35} />
            </a>
          </Git>
        </Footers>
      </Box>
    </React.Fragment>
  );
};

export default Card;
