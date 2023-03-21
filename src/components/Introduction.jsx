import React from "react";
import styled from "styled-components";
import pic from "./IMG_0088.jpg";
import "../App.css";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 65vw;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-size: 100% 2px;
  background-repeat: no-repeat;
  z-index: 1;
  border-left: 4px solid ${(props) => props.theme.body};
  border-right: 4px solid ${(props) => props.theme.text};
  height: 50vh;
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: rgba(252, 246, 244,0.6);
    font-size: calc{0.5rem +1.5vw}
    font-weight: 300;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`;

const Introduction = () => {
  return (
    <div>
      <Box
        initial={{ height: 0 }}
        animate={{ height: "55vh" }}
        transition={{ type: "spring", duration: 2, delay: 1 }}
      >
        <SubBox>
          <Text>
            <h1>Hi,</h1>
            <h3>I'm Ibrahim</h3>
            <h6>I can turn your ideas into beautiful websites</h6>
          </Text>
        </SubBox>
        <SubBox>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <img className="pic" src={pic} alt="me" />
          </motion.div>
        </SubBox>
      </Box>
    </div>
  );
};

export default Introduction;
