import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const HomePage = ({ children }) => <PageWrapper>{children}</PageWrapper>;

export default HomePage;
