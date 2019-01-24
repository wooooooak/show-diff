import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  flex: 2;
  max-width: 100%;
  margin-top: 20px;
  margin-left: 1em;
  color: black;
  display: flex;
  flex-direction: column;
`;

const expand = keyframes`
  from {
    height: 0px;
  }
  to {
    width: 100%;
    height: 3em;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  position: relative;
  padding: auto 0;
  text-align: center;
  background-color: ${props => props.backgroundColor || "#fffffe"};
  border-radius: 5px;
  margin-bottom: 1em;
`;

export const CurrentCard = styled(Card)`
  height: 0px;
  animation: ${expand} 0.5s linear forwards;
  border: 5px solid #47b8e0;
`;

export const RemainCard = styled(Card)`
  height: 3em;
`;

export const Name = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  margin: auto 0;
  font-size: 1.2em;
`;
