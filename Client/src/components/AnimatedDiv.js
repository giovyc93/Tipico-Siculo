import React from "react";
import styled, { keyframes } from "styled-components";
import Content from "./Content";

import robot from "../assets/img/robot1.avif";
const wipeInRight = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

const AnimatedComponent = styled.div`
  animation: 5s cubic-bezier(0.25, 1, 0.3, 1) ${wipeInRight} both;
`;

const AnimatedDiv = () => {
  return (
    <AnimatedComponent>
      <div className="contentContainer">
        <Content
          classContainerDiff="contentDiff"
          contentTitle1="Storia Prismed"
          contentParagraph1="testo di default per contenere il paragrafo"
          contentImage1={robot}
        />
      </div>
    </AnimatedComponent>
  );
};

export default AnimatedDiv;
