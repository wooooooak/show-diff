import React, { Component } from "react";

import axios from "axios";

import AppStyle from "./AppStyle";
import DiffViewer from "./component/DiffViewer";
import FolderList from "./component/FolderList";
import HomePage from "./page/HomePage";
import Summary from "./component/Summary";

import API from "./API";

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
    const { data } = await API.get(`file/summary`);
    const treeData = await API.get(`tree/mod`);
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
    const { data } = await API.get("file/diff", {
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
    const { data } = await API.get(`tree/${mode}`);
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
          <AppStyle />
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
