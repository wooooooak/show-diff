import React from 'react';
import styled from 'styled-components';

const Container = styled.div`display: flex;`;

const Pre = styled.pre`
	flex: 7;
	overflow: scroll;
	height: 90vh;
	::-webkit-scrollbar {
		width: 10px; /* remove scrollbar space */
		background: transparent; /* optional: just make scrollbar invisible */
	}
	/* optional: show position indicator in red */
	::-webkit-scrollbar-thumb {
		background: #ff0000;
	}
`;

const LineCounter = styled.span`
	background-color: ${(props) => props.backgroundColor};
	padding-right: 3px;
`;
const StringContent = styled.span`
	background-color: ${(props) => props.backgroundColor};
	width: 100%;
`;
const mapContentToTag = (contentArr) => {
	return contentArr.map((content, index) => {
		const { v1Line, v2Line, symbol, string } = content;
		let lineCounterColor = '#FFFFF3';
		let contentColor = '#FFFFF3';
		if (symbol === '+') {
			lineCounterColor = '#9DC3C1';
			contentColor = '#D8E6E7';
		} else if (symbol === '-') {
			lineCounterColor = '#ED9282';
			contentColor = '#F7AA97';
		}
		return (
			<Container key={index}>
				<LineCounter backgroundColor={lineCounterColor}>
					{v1Line} {v2Line}
				</LineCounter>{' '}
				<StringContent backgroundColor={contentColor}>
					{' '}
					{symbol} {string}
				</StringContent>
			</Container>
		);
	});
};

const DiffViewer = ({ content }) => {
	return <Pre>{mapContentToTag(content)}</Pre>;
};

export default DiffViewer;
