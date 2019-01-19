import React, { Component } from 'react';
import axios from 'axios';

import DiffViewer from './component/DiffViewer';
import FolderList from './component/FolderList';

class App extends Component {
	state = {
		cursor: {}
	};

	onClickFile = async (cursor) => {
		console.log(cursor);
		const { data } = await axios.get('http://localhost:3000/diff_file', {
			params: {
				path: cursor.path
			}
		});
		this.setState({
			cursor
		});
	};

	render() {
		const { cursor } = this.state;
		return (
			<React.Fragment>
				<div className="App">
					<FolderList onClickFile={this.onClickFile} />
				</div>
				<DiffViewer cursor={cursor} />
				{/* <DiffViewer cursor={json으로된diff파일} /> */}
			</React.Fragment>
		);
	}
}

export default App;
