import React from 'react';

import {
	MoreArticlesStyled,
	Heading,
	Title,
	ImageWrapper,
	Col,
	AccountContainer,
	Row1,
	Row2
} from './styles';


import WriterInfo from '../WriterInfo';
import ClapsContainer from '../ClapsContainer';

import Image from '../../assets/images/cartoon-2.jpg';

const MoreArticles = () => (
	<MoreArticlesStyled>
		<Title>More from 3min read</Title>
		<Col>
			<Row1>
				<ImageWrapper>
					<img src={Image} alt="article"/>
				</ImageWrapper>
			</Row1>
			<Row2>
				<Heading>How to write a Headline</Heading>
				<AccountContainer>
					<WriterInfo/>
					<ClapsContainer/>
				</AccountContainer>
			</Row2>
		</Col>
	</MoreArticlesStyled>
);


export default MoreArticles;
