import React, { Component } from 'react';
import { Treebeard } from 'react-treebeard';
import axios from 'axios';

class App extends Component {
	state = {
		tree: {}
	};

	componentDidMount = async () => {
		const { data } = await axios.get('http://localhost:3000/a');
		console.log(data.data);
		this.setState({
			...this.state,
			tree: data.data
		});
	};

	onToggle = (node, toggled) => {
		if (this.state.tree.cursor) {
			const newState = this.state;
			newState.tree.cursor.active = false;
			this.setState({
				newState
			});
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
		}
		this.setState({ cursor: node });
	};

	render() {
		return (
			<div className="App">
				<Treebeard data={this.state.tree} onToggle={this.onToggle} />
			</div>
		);
	}
}

export default App;
