import React from "react";
import styled from "styled-components";

const Stats = (value) => {
  return (
    <>
      <Number>{value.value.number}</Number>
      <pre> </pre>
      <Name>{value.value.name}</Name>
    </>
  );
};
export default Stats;

const Number = styled.span`
  font-weight: Bolder;
`;
const Name = styled.span`
  color: rgb(101, 119, 134);
`;
