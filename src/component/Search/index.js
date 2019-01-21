import React from "react";

const defaultMatcher = (filterText, node) => {
  return node.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
};

const findNode = (node, filter, matcher) => {
  return (
    matcher(filter, node) || // i match
    (node.children && // or i have decendents and one of them match
      node.children.length &&
      !!node.children.find(child => findNode(child, filter, matcher)))
  );
};

const filterTree = (node, filter, matcher = defaultMatcher) => {
  // If im an exact match then all my children get to stay
  if (matcher(filter, node) || !node.children) {
    return node;
  }
  // If not then only keep the ones that match or have matching descendants
  const filtered = node.children
    .filter(child => findNode(child, filter, matcher))
    .map(child => filterTree(child, filter, matcher));
  return Object.assign({}, node, { children: filtered });
};

const expandFilteredNodes = (node, filter, matcher = defaultMatcher) => {
  let children = node.children;
  if (!children || children.length === 0) {
    return Object.assign({}, node, { toggled: false });
  }
  const childrenWithMatches = node.children.filter(child =>
    findNode(child, filter, matcher)
  );
  const shouldExpand = childrenWithMatches.length > 0;
  // If im going to expand, go through all the matches and see if thier children need to expand
  if (shouldExpand) {
    children = childrenWithMatches.map(child => {
      return expandFilteredNodes(child, filter, matcher);
    });
  }
  return Object.assign({}, node, {
    children: children,
    toggled: shouldExpand
  });
};

const onFilterMouseUp = (e, initTree, onFilter) => {
  const filter = e.target.value.trim();
  if (!filter) {
    console.log("filter 없음!");
    // 없으면 처음 쌩 데이터를 받아와야 한다
    return onFilter(initTree);
  }
  var filtered = filterTree(initTree, filter);
  filtered = expandFilteredNodes(filtered, filter);
  onFilter(filtered);
  // this.setState({ data: filtered });
};

const Search = ({ initTree, onFilter }) => {
  return (
    <input
      type="text"
      onKeyUp={e => onFilterMouseUp(e, initTree, onFilter)}
      placeholder="Input!"
    />
  );
};

export default Search;
