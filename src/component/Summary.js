import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const Wrapper = styled.div`
	width: 100vh;
	text-align: center;
	margin: 0 auto;
	/* height: 10vh; */
	display: flex;
	justify-content: center;
`;

const Circle = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:700');
	font-family: 'Nanum Gothic', sans-serif;
	border-radius: 10px;
	margin: 10px;
	padding: 10px 10px;
	width: 10em;
	font-size: 2em;
	background-color: #efffe9;
`;

const AddCircle = styled(Circle)`
	background-color: #EE7785;
	
`;
const DelCircle = styled(Circle)`
	/* background-color: #FFFFF2; */
`;
const ModCircle = styled(Circle)`
	background-color: #FFFFF2;
`;

const mapSummaryToCircle = (summary) => {
	const totalCount = summary['total'];
	return Object.keys(summary).map((info, index) => {
		if (index === 0) {
			// add
			return (
				<AddCircle size={summary[info] / totalCount * 15}>
					<CountUp
						start={0}
						end={summary[info]}
						duration={3}
						prefix="삭제 "
						suffix="개"
					/>
				</AddCircle>
			);
		} else if (index === 1) {
			return (
				<DelCircle size={summary[info] / totalCount * 15}>
					<CountUp
						start={0}
						end={summary[info]}
						duration={3}
						prefix="추가 "
						suffix="개"
					/>
				</DelCircle>
			);
		} else if (index === 2) {
			return (
				<ModCircle size={summary[info] / totalCount * 15}>
					<CountUp
						start={0}
						end={summary[info]}
						duration={3}
						prefix="수정 "
						suffix="개"
					/>
				</ModCircle>
			);
		}
	});
};

const Summary = ({ summary }) => {
	if (summary) {
		return <Wrapper>{mapSummaryToCircle(summary)}</Wrapper>;
	} else {
		return null;
	}
};

export default Summary;
