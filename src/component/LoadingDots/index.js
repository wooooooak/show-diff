import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  from { transform: scale(2);
    margin-bottom: 0px;
   }
  to { transform: scale(200);
    margin-bottom: 10px;
   }
  /* 100% { transform: scale(3); } */
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.01s linear infinite;
  /* animation-delay: ${props => props.delay}; */
`;

class LoadingDots extends Component {
  render() {
    return (
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    );
  }
}

export default LoadingDots;
