import React from 'react';

import {
    WriterInfoStyled,
    Avatar,
    TextWrapper,
    AuthorInfo,
    AuthorName,
    AuthorPlace,
    PublishInfo,
    PublishDate,
    ReadTime,
    ImageWrapper,
    IconWrapper
} from './styles';

import ImagePerson from '../../assets/images/avatar-2.png';
import IconStar from '../../assets/icons/star.png';

const WriterInfo = () => (
	<WriterInfoStyled>
		<Avatar>
			<ImageWrapper>
				<img src={ImagePerson} alt="avatar" />
			</ImageWrapper>
		</Avatar>
		<TextWrapper>
			<AuthorInfo>
				<AuthorName>John Doe</AuthorName>
				<AuthorPlace>in Miami</AuthorPlace>
			</AuthorInfo>
			<PublishInfo>
				<PublishDate>Jun 25, 2019</PublishDate>
				<ReadTime>5 min read</ReadTime>
				<IconWrapper><img src={IconStar} alt="icon-star" /></IconWrapper>
			</PublishInfo>
		</TextWrapper>
	</WriterInfoStyled>
);

export default WriterInfo;
