import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import DiffViewer from './component/DiffViewer';
import FolderList from './component/FolderList';
import HomePage from './page/HomePage';
import Summary from './component/Summary';

const GlobalStyle = createGlobalStyle`
  body {
	  margin: 0;
  }
`;

class App extends Component {
	state = {
		cursor: {},
		content: [],
		summary: {}
	};

	componentDidMount = async () => {
		const { data } = await axios.get('http://localhost:3001/summary');
		console.log(data);
		this.setState({
			summary: data
		});
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
		const { cursor, content, summary } = this.state;
		console.log(summary);
		return (
			<HomePage>
				<GlobalStyle />
				<Summary summary={summary} />
				<FolderList onClickFile={this.onClickFile} />
				<DiffViewer content={content} />
			</HomePage>
		);
	}
}

export default App;
