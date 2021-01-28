import React from 'react';

import {
	StyledContainer,
	Title,
	Row,
	HR
} from './styles';

import MoreArticles from '../MoreArticles';


const MoreArticlesContainer = () => (
	<StyledContainer>
		<Title>More From Medium</Title>
		<HR/>
		<Row>
			<MoreArticles />
			<MoreArticles />
			<MoreArticles />
		</Row>
	</StyledContainer>

);

export default MoreArticlesContainer;
