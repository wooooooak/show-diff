import React, { Component } from "react";
import { Treebeard } from "react-treebeard";

import * as style from "./style";
import Search from "../Search";

class FolderList extends Component {
  onToggle = (node, toggled) => {
    node.active = true;
    if (node.children) {
      // 디렉터리일 경우 toggle하는 것
      node.toggled = toggled;
    }
    const newState = this.props.tree;
    newState.cursor = node;
    if (node.type === "file") {
      this.props.onClickFile(node);
    }
    this.setState({ cursor: node });
  };

  render() {
    return (
      <style.ListContaineer>
        <Search />
        <Treebeard
          data={this.props.tree}
          onToggle={this.onToggle}
          clicked={this.onClickFile}
        />
      </style.ListContaineer>
    );
  }
}

export default FolderList;
