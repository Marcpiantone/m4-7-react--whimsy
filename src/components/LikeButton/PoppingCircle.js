import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Circle size={size} color={color} />;
};

export default PoppingCircle;

const poppin = keyframes`
from {
    transform : scale(0)
}
to { transform : scale(1)} `;

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`;

const Circle = styled.div`
  position: absolute;
  display: block;
  z-index: 1;
  border-radius: 50%;
  background-color: ${(p) => p.color};
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;

  animation: ${poppin} 300ms, ${fade} 500ms forwards;
`;
