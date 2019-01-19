import React, { Component } from 'react';
import axios from 'axios';

import DiffViewer from './component/DiffViewer';
import FolderList from './component/FolderList';

class App extends Component {
	state = {
		cursor: {},
		content: []
	};

	onClickFile = async (cursor) => {
		console.log(cursor);
		const { data } = await axios.get('http://localhost:3001/diff_file', {
			params: {
				path: cursor.path
			}
		});
		console.dir(data.content);
		this.setState({
			cursor,
			content: data.content
		});
	};

	render() {
		const { cursor, content } = this.state;
		return (
			<React.Fragment>
				<div className="App">
					<FolderList onClickFile={this.onClickFile} />
				</div>
				<DiffViewer content={content} />
				{/* <DiffViewer cursor={json으로된diff파일} /> */}
			</React.Fragment>
		);
	}
}

export default App;
