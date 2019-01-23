import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vh;
  text-align: center;
  margin: 25px auto 15px;
  /* margin-top: 15px; */
  display: flex;
  justify-content: center;
`;

export const Circle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:700");
  font-family: "Nanum Gothic", sans-serif;
  border-radius: 5px;
  margin: 10px;
  padding: 10px 10px;
  width: 100%;
  font-size: 2em;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 10px greenyellow;
  }
`;

export const AddCircle = styled(Circle)`
  background-color: #ee7785;
`;

export const DelCircle = styled(Circle)`
  background-color: #efffe9;
`;

export const ModCircle = styled(Circle)`
  background-color: #fffff2;
`;
