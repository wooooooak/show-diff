import styled, { keyframes } from "styled-components";

const borderPx = "6px";

export const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
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
    width: 97%;
    height: 3em;
  }
`;

const coloringAnimation = keyframes`
  25% {
    border: ${borderPx} solid #45d9fd;
  }

  50% {
    border: ${borderPx} solid #fbd14b;
  }

  75% {
    border: ${borderPx} solid #3ac569;
  }

  100% {
    border: ${borderPx} solid #f1404b;
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
  animation: ${expand} 0.4s linear forwards,
    ${coloringAnimation} 0.8s 0.5s linear forwards;
  border: 5px solid #47b8e0;
`;

export const RemainCard = styled(Card)`
  height: 3em;
`;

export const Name = styled.p`
  margin: auto 0;
  font-size: 1.2em;
`;

export const Title = styled.div`
  font-size: 2em;
  color: white;
  text-align: center;
  margin-top: -20px;
  margin-bottom: 10px;
`;