import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponents from "../subComponent/LogoComponents";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponent/PowerButton";
import SocialIcons from "../subComponent/SocialIcons";
import ParticleComponentDark from "../subComponent/ParticleComponentDark";
import spaceman from "./spaceman.png";
import BigTitle from "../subComponent/BigTitle";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const float = keyframes`
  0%{transform: translateY(-10px)}
  50%{transform: translateY(15px) translateX(15px)}
  100%{transform: translateY(-10px)}

`;

const Spaceman = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  width: 50vw;
  color: ${(props) => props.theme.text};
  position: absolute;
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  height: auto;
  line-height: 1.5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const Aboutpage = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Box>
          <LogoComponents theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <ParticleComponentDark />

          <Spaceman>
            <img src={spaceman} alt="spaceman" />
          </Spaceman>
          <Main>
            I'm a front-end developer.
            <br /> <br />I embrace the journey of growth, always eager to put my
            knowledge into practice. I specialize in creating dynamic user
            experiences for real-life projects.
            <br /> <br /> With every website, application or digital tool I
            create, I pour my heart and soul into the project, always striving
            to learn and grow.
          </Main>
          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Aboutpage;
