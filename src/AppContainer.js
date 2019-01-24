import React, { Component } from "react";

import AppStyle from "./AppStyle";
import DiffViewer from "./component/DiffViewer";
import FolderList from "./component/FolderList";
import HomePage from "./page/HomePage";
import Summary from "./component/Summary";

import API from "./API";
import History from "./component/History";

class AppContainer extends Component {
  state = {
    initTree: {},
    diffContent: [],
    diffLoading: false,
    summary: {},
    mode: "mod",
    tree: {
      cursor: {}
    },
    history: []
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

  isClickCurrentFile = cursor => {
    if (this.state.history[0] && cursor.path === this.state.history[0].path) {
      return true;
    } else {
      return false;
    }
  };

  onClickLeafFile = async cursor => {
    if (!this.isClickCurrentFile(cursor)) {
      this.setState({
        diffLoading: true
      });
      const { data } = await API.get("file/diff", {
        params: {
          path: cursor.path
        }
      });
      const tempHistory = this.state.history;
      tempHistory.splice(0, 0, { name: cursor.name, path: cursor.path });
      this.setState({
        diffContent: data.content,
        diffLoading: false,
        tree: {
          ...this.state.tree,
          cursor
        },
        history: tempHistory
      });
    }
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
      initTree,
      history
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
          <History
            history={history}
            onClickHistoryCard={this.onClickLeafFile}
          />
        </HomePage>
      </div>
    );
  }
}

export default AppContainer;
