import React from 'react';

const mapContentToTag = (contentArr) => {
	return contentArr.map((str, index) => {
		return <pre key={index}>{str}</pre>;
	});
};

const DiffViewer = ({ content }) => {
	return <div>{mapContentToTag(content)}</div>;
};

export default DiffViewer;
