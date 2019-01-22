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

class AppContainer extends Component {
  state = {
    initTree: {},
    diffContent: [],
    diffLoading: false,
    summary: {},
    mode: "mod",
    tree: {
      cursor: {}
    }
  };

  componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:3001/summary");
    const treeData = await axios.get(`http://localhost:3001/list/mod`);
    const newTree = treeData.data.tree;
    newTree.toggled = true;
    newTree.active = true;
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
    const { data } = await axios.get("http://localhost:3001/file/diff", {
      params: {
        path: cursor.path
      }
    });
    this.setState({
      diffContent: data.content,
      diffLoading: false,
      tree: {
        ...this.state.tree,
        cursor
      }
    });
  };

  onChangeMode = async mode => {
    const { data } = await axios.get(`http://localhost:3001/list/${mode}`);
    this.setState({
      mode,
      tree: data.tree,
      initTree: data.tree,
      diffContent: []
    });
  };

  onFilter = filtered => {
    this.setState({
      tree: filtered
    });
  };

  render() {
    const {
      diffContent,
      summary,
      diffLoading,
      mode,
      tree,
      initTree
    } = this.state;
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
            cursor={tree.cursor}
          />
          <DiffViewer content={diffContent} loading={diffLoading} />
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

export default AppContainer;
