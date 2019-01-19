import React, { Component } from 'react';

const DiffViewer = ({ cursor }) => {
	if (cursor) {
		console.log(cursor.type);
	}
	return <div>{JSON.stringify(cursor)}</div>;
};

export default DiffViewer;
