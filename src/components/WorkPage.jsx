import React, { useEffect, useRef } from "react";
import LogoComponents from "../subComponent/LogoComponents";
import PowerButton from "../subComponent/PowerButton";
import SocialIcons from "../subComponent/SocialIcons";
import { darkTheme } from "./Themes";
import styled, { ThemeProvider } from "styled-components";
import { Work } from "./WorkData";
import Card from "../subComponent/Card";
import BigTitle from "../subComponent/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  width: 100vw;
  height: 400vh;
  position: relative;
  background: black;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
  position: fixed;
  color: ${(props) => props.theme.text};
  top: 12rem;
  height: 40vh;
  left: calc(10rem + 15vw);
  display: flex;.
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

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Box>
          <PowerButton />
          <SocialIcons theme="dark" />
          <LogoComponents theme="dark" />
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((item) => {
              return (
                <React.Fragment>
                  <Card item={item} />
                </React.Fragment>
              );
            })}
          </Main>
          <BigTitle text="WORK" top="10%" right="20%" />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default WorkPage;
