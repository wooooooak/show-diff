import React from "react";
import * as styled from "./style";

const mapContentToTag = contentArr => {
  return contentArr.map((content, index) => {
    const { v1Line, v2Line, symbol, string } = content;
    let lineCounterColor = "#FFFFF3";
    let contentColor = "#FFFFF3";
    if (symbol === "+") {
      lineCounterColor = "#9DC3C1";
      contentColor = "#D8E6E7";
    } else if (symbol === "-") {
      lineCounterColor = "#ED9282";
      contentColor = "#F7AA97";
    }
    return (
      <styled.Container key={index}>
        <styled.LineCounter backgroundColor={lineCounterColor}>
          {v1Line} {v2Line}
        </styled.LineCounter>{" "}
        <styled.StringContent backgroundColor={contentColor}>
          {" "}
          {symbol} {string}
        </styled.StringContent>
      </styled.Container>
    );
  });
};

const DiffViewer = ({ content, loading }) => {
  return loading ? (
    <styled.LoadingBox> hello </styled.LoadingBox>
  ) : (
    <styled.Pre>{mapContentToTag(content)}</styled.Pre>
  );
};

export default DiffViewer;
