import styled, { css } from "styled-components";

const boxTemplate = css`
  flex: 6;
  border-radius: 10px;
  align-items: center;
  background-color: #f4f5f9;
  margin-bottom: 10px;
`;

export const Pre = styled.pre`
  height: 87vh;
  overflow: scroll;
  ${boxTemplate}
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
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  }
`;

export const EmptyPre = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  ${boxTemplate}
  display: flex;
  justify-content: center;
  font-size: 4em;
`;

export const LineContainer = styled.div`
  display: flex;
  &:hover {
    span {
      background: #f0e5de !important;
    }
  }
`;

export const LineCounter = styled.span`
  background-color: ${props => props.backgroundColor};
  padding-right: 3px;
`;

export const StringContent = styled.span`
  background-color: ${props => props.backgroundColor};
  width: 100%;
`;
