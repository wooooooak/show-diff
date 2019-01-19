import React from 'react';

const Summary = ({ summary }) => {
	if (summary) {
		return JSON.stringify(summary);
	} else {
		return null;
	}
};

export default Summary;
