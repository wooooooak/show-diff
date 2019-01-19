import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import axios from 'axios';

class FolderList extends Component {
	state = {};

	componentDidMount = async () => {
		const { data } = await axios.get('http://localhost:3001/');
		this.setState(data.data);
	};

	onToggle = (node, toggled) => {
		if (this.state.cursor) {
			const newState = this.state;
			newState.cursor.active = false;
			this.setState({
				newState
			});
		}
		node.active = true;
		if (node.children) {
			// 디렉터리일 경우 toggle하는 것
			node.toggled = toggled;
		}
		const newState = this.state;
		newState.cursor = node;
		if (node.type === 'file') {
			this.props.onClickFile(node);
			this.setState({ cursor: node });
		}
	};

	render() {
		return (
			<div>
				<Treebeard
					data={this.state}
					onToggle={this.onToggle}
					clicked={this.onClickFile}
				/>
			</div>
		);
	}
}

export default FolderList;
