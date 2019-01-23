import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Pre = styled.pre`
  flex: 6;
  height: 87vh;
  margin-right: 1em;
  border-radius: 10px;
  overflow: scroll;
  background-color: #f4f5f9;
  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #e53a40;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
