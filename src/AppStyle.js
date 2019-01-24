import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  body {
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:700");
	  margin: 0;
	  background-color: #21252B;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #F8FAFF;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export default AppStyle;
