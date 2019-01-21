import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Pre = styled.pre`
  flex: 6;
  height: 87vh;
  margin-right: 1em;
  overflow: scroll;
  background-color: #f4f5f9;
  ::-webkit-scrollbar {
    width: 10px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  /* optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

export const LoadingBox = styled(Pre)`
  text-align: center;
`;

export const LineCounter = styled.span`
  background-color: ${props => props.backgroundColor};
  padding-right: 3px;
`;

export const StringContent = styled.span`
  background-color: ${props => props.backgroundColor};
  width: 100%;
`;
