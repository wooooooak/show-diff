import React from "react";
import CountUp from "react-countup";

import * as style from "./style";

const mapSummaryToCircle = (summary, onClickMode) => {
  return Object.keys(summary).map((info, index) => {
    if (index === 0) {
      // add
      return (
        <style.AddCircle onClick={() => onClickMode("del")}>
          <CountUp
            start={0}
            end={summary[info]}
            duration={3}
            prefix="삭제 "
            suffix="개"
          />
        </style.AddCircle>
      );
    } else if (index === 1) {
      return (
        <style.DelCircle onClick={() => onClickMode("add")}>
          <CountUp
            start={0}
            end={summary[info]}
            duration={3}
            prefix="추가 "
            suffix="개"
          />
        </style.DelCircle>
      );
    } else if (index === 2) {
      return (
        <style.ModCircle onClick={() => onClickMode("mod")}>
          <CountUp
            start={0}
            end={summary[info]}
            duration={3}
            prefix="수정 "
            suffix="개"
          />
        </style.ModCircle>
      );
    }
  });
};

const Summary = ({ summary, onClickMode }) => {
  if (summary) {
    return (
      <style.Wrapper>{mapSummaryToCircle(summary, onClickMode)}</style.Wrapper>
    );
  } else {
    return null;
  }
};

export default Summary;
