import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
  position: fixed;
`;

const BigTitle = (props) => {
  return (
    <React.Fragment>
      <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
      </Text>
    </React.Fragment>
  );
};

export default BigTitle;
