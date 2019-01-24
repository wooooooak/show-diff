import React from "react";
import FlipMove from "react-flip-move";
import * as style from "./style";

const genUniqKey = (str, id) => {
  return str + id;
};

const mapHistoryToCard = (history, onClickHistoryCard) => {
  let uniqId = 1;
  return history.map((el, index) => {
    if (index === 0) {
      return (
        <style.CurrentCard
          key={genUniqKey(el.name, uniqId++)}
          // backgroundColor="blue"
          onClick={() => onClickHistoryCard(el)}
        >
          <style.Name>{el.name}</style.Name>
        </style.CurrentCard>
      );
    }
    return (
      <style.RemainCard
        key={genUniqKey(el.name, uniqId++)}
        onClick={() => onClickHistoryCard(el)}
      >
        <style.Name>{el.name}</style.Name>
      </style.RemainCard>
    );
  });
};

const History = ({ history, onClickHistoryCard }) => {
  return (
    <style.Container>
      <style.Title>HISTORY</style.Title>
      {history.length > 0
        ? mapHistoryToCard(history, onClickHistoryCard)
        : null}
    </style.Container>
  );
};

export default History;
