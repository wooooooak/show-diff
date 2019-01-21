import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

import DiffViewer from "./component/DiffViewer";
import FolderList from "./component/FolderList";
import HomePage from "./page/HomePage";
import Summary from "./component/Summary";

const GlobalStyle = createGlobalStyle`
  body {
	  margin: 0;
	  background-color: #21252B;
  }
`;

class App extends Component {
  state = {
    cursor: {},
    content: [],
    diffLoading: false,
    summary: {},
    mode: "mod",
    tree: {}
  };

  componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:3001/summary");
    const treeData = await axios.get(`http://localhost:3001/list/mod`);
    this.setState({
      summary: data,
      tree: treeData.data.tree
    });
  };

  onClickFile = async cursor => {
    this.setState({
      diffLoading: true
    });
    const { data } = await axios.get("http://localhost:3001/diff_file", {
      params: {
        path: cursor.path
      }
    });
    this.setState({
      cursor,
      content: data.content,
      diffLoading: false
    });
  };

  onClickMode = async mode => {
    const { data } = await axios.get(`http://localhost:3001/list/${mode}`);
    this.setState({
      mode,
      tree: data.tree
    });
  };

  render() {
    console.log(this.state.diffLoading);
    const { content, summary, diffLoading, mode, tree } = this.state;
    return (
      <div>
        <Summary summary={summary} onClickMode={this.onClickMode} />

        <HomePage>
          <GlobalStyle />
          <FolderList onClickFile={this.onClickFile} mode={mode} tree={tree} />
          <DiffViewer content={content} loading={diffLoading} />
        </HomePage>
      </div>
    );
  }
}

export default App;
