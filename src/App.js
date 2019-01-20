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
	  background-color: #21252B;
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
		const { content, summary } = this.state;
		return (
			<div>
				<Summary summary={summary} />

				<HomePage>
					<GlobalStyle />
					<FolderList onClickFile={this.onClickFile} />
					<DiffViewer content={content} />
				</HomePage>
			</div>
		);
	}
}

export default App;
