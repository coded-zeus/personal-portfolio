import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import LogoComponents from "../subComponent/LogoComponents";
import PowerButton from "../subComponent/PowerButton";
import SocialIcons from "../subComponent/SocialIcons";
import Introduction from "./Introduction";
import logo1 from "./yin-yang-solid.svg";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  position: absolute;
  right: calc(1rem + 2vw);
  top: 2rem;
  z-index: 1;
`;
const EXPERIENCE = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  position: absolute;
  right: calc(1rem + 2vw);
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`;
const WORKS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: absolute;
  left: calc(1rem + 2vw);
  top: 38%;
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  width: ${(props) => (props.click ? "50px" : "100px")};
  height: ${(props) => (props.click ? "50px" : "100px")};
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s ease-in-out;

  & > :last-child {
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  background-color: black;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Mains = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click} />
        <PowerButton />
        <LogoComponents theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click} onClick={handleClick}>
          <img src={logo1} alt="center" />
          <span>Click Me</span>
        </Center>

        <Contact href="mailto:salamibrahim2003@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <EXPERIENCE to="/experience">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </motion.h2>
        </EXPERIENCE>
        <WORKS to="/work" click={click}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
          >
            Works
          </motion.h2>
        </WORKS>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.6 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.6 },
              }}
            >
              About
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.6 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.6 },
              }}
            >
              Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Introduction click={click} /> : null}
    </MainContainer>
  );
};

export default Mains;
