import React from "react";
import { lightTheme } from "./Themes";
import styled, { ThemeProvider } from "styled-components";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import LogoComponents from "../subComponent/LogoComponents";
import PowerButton from "../subComponent/PowerButton";
import SocialIcons from "../subComponent/SocialIcons";
import ParticleComponent from "../subComponent/ParticleComponent";
import BigTitle from "../subComponent/BigTitle";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid black;
  color: black;
  padding: 2rem;
  width: 30vw;
  background-color: ${(props) => props.theme.body};
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 2rem;
  }
`;

const Skills = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <LogoComponents />
        <SocialIcons />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Box>
          <Main>
            <Title>
              <BsFillFileEarmarkCodeFill size={40} />
              Frontend Developer
            </Title>
            <Description>
              I value business or brand for which I'm creating, thus I enjoy
              bringing new ideas to life.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Html, Css, JavaScript, Reactjs, Nextjs, Typescript, Sass/Scss,
                Tailwind Css, Firebase, Jest ...
              </p>
            </Description>
          </Main>
          <BigTitle text="SKILLS" top="80%" right="10%" />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Skills;
