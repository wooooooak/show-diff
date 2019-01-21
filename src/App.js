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
    initTree: {},
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
    const newTree = treeData.data.tree;
    newTree.toggled = true;
    this.setState({
      summary: data,
      tree: newTree,
      initTree: newTree
    });
  };

  onClickLeafFile = async cursor => {
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

  onChangeMode = async mode => {
    const { data } = await axios.get(`http://localhost:3001/list/${mode}`);
    this.setState({
      mode,
      tree: data.tree,
      initTree: data.tree,
      content: []
    });
  };

  onFilter = filtered => {
    this.setState({
      tree: filtered
    });
  };

  render() {
    const { content, summary, diffLoading, mode, tree, initTree } = this.state;
    return (
      <div>
        <Summary summary={summary} onChangeMode={this.onChangeMode} />

        <HomePage>
          <GlobalStyle />
          <FolderList
            onClickFile={this.onClickLeafFile}
            onFilter={this.onFilter}
            mode={mode}
            tree={tree}
            initTree={initTree}
          />
          <DiffViewer content={content} loading={diffLoading} />
          <FolderList
            onClickFile={this.onClickLeafFile}
            mode={mode}
            tree={{}}
          />
        </HomePage>
      </div>
    );
  }
}

export default App;
