import React, { Component } from 'react';
import styled from 'styled-components';
import { Treebeard } from 'react-treebeard';
import axios from 'axios';

const ListContaineer = styled.div`
	flex: 2;
	height: 90vh;
	padding-left: 1em;
	overflow: scroll;
	::-webkit-scrollbar {
		width: 0px; /* 세로 스크롤 삭제 */
		background: transparent; /* optional: just make scrollbar invisible */
	}
	/* optional: show position indicator in red */
	::-webkit-scrollbar-thumb {
		height: 5px;
		background: #ff0000;
	}
	background-color: #21252b;
`;

class FolderList extends Component {
	state = {};

	componentDidMount = async () => {
		const { data } = await axios.get('http://localhost:3001/tree');
		this.setState(data.tree);
	};

	onToggle = (node, toggled) => {
		node.active = true;
		if (node.children) {
			// 디렉터리일 경우 toggle하는 것
			node.toggled = toggled;
		}
		const newState = this.state;
		newState.cursor = node;
		if (node.type === 'file') {
			this.props.onClickFile(node);
		}
		this.setState({ cursor: node });
	};

	render() {
		return (
			<ListContaineer>
				<Treebeard
					data={this.state}
					onToggle={this.onToggle}
					clicked={this.onClickFile}
				/>
			</ListContaineer>
		);
	}
}

export default FolderList;
