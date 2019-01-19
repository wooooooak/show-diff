import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import DiffViewer from './component/DiffViewer';
import FolderList from './component/FolderList';
import HomePage from './page/HomePage';

const GlobalStyle = createGlobalStyle`
  body {
	  margin: 0;
  }
`;

class App extends Component {
	state = {
		cursor: {},
		content: []
	};

	onClickFile = async (cursor) => {
		const { data } = await axios.get('http://localhost:3001/diff_file', {
			params: {
				path: cursor.path
			}
		});
		this.setState({
			cursor,
			content: data.content
		});
	};

	render() {
		const { cursor, content } = this.state;
		return (
			<HomePage>
				<GlobalStyle />
				<FolderList onClickFile={this.onClickFile} />
				<DiffViewer content={content} />
			</HomePage>
		);
	}
}

export default App;
