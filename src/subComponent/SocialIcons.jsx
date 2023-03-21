import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GrGithub, GrLinkedin, GrMail, GrTwitter } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.3rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 3rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{
          transform: "scale(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        style={{ color: "black" }}
        target="_blank"
        href="https://linkedin.com/in/abdulsalam-ibrahim-b60a01246"
      >
        <GrLinkedin
          size={25}
          color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
        />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{
          transform: "scale(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 1.0 }}
        style={{ color: "black" }}
        target="_blank"
        href="https://twitter.com/weirdweirdo14"
      >
        <GrTwitter
          size={25}
          color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
        />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{
          transform: "scale(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
        style={{ color: "black" }}
        target="_blank"
        href="https://github.com/coded-zeus"
      >
        <GrGithub
          size={25}
          color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
        />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{
          transform: "scale(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
        style={{ color: "black" }}
        target="_blank"
        href="mailto:salamibrahim2003@gmail.com"
      >
        <GrMail
          size={25}
          color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
        />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{
          transform: "scale(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        style={{ color: "black" }}
        target="_blank"
        href="https://wa.me/+2349154389852"
      >
        <IoLogoWhatsapp
          size={25}
          color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
        />
      </motion.a>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{ height: "3rem" }}
        transition={{ type: "spring", duration: 1, delay: 1.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
