import React from 'react';

import {
	ArticleMainStyled,
	Heading,
	ImageWrapper,
	ImageReference,
	ComponentHolder,
	ComponentHolder2,
	TextWrapper,
	P,
	TitleMain,
	TitleSecondary,
	Highlighted,
	Quote,
	UnderlinedText,
	TextBold,
	ItalicBold,
	HR
} from './styles';

import WriterInfo from '../WriterInfo';
import IconHolder from '../IconHolder';
import SquareHashtags from '../SquareHashtags';
import ClapsBig from '../ClapsBig';
import ImageMain from '../../assets/images/cartoon-2.jpg';

const ArticleMain = () => (
	<ArticleMainStyled>
		<Heading>Fun Side Projects That You Can Build Today</Heading>
		<ComponentHolder>
			<WriterInfo/>
			<IconHolder/>
		</ComponentHolder>
		<ImageWrapper>
			<img src={ImageMain} alt="main-article"/>
			<ImageReference>Photo was taken by fans of Minions in 2020</ImageReference>
		</ImageWrapper>
		<TextWrapper>
		<TitleMain>Title-Main</TitleMain>
			<P>
					Lorem ipsum dolor sit amet, 
					ad duis discere disputationi eum, 
					eum oratio epicurei deserunt ad, 
					vidit dicam conclusionemque ex qui. 
					Mei ne eros 
					pertinacia sadipscing, ei est doctus 
					latine aperiam, te quo diam possit noluisse. 
					An soluta maiorum consetetur his, tale liber vim et.
			</P>
			<TitleSecondary>Title-Secondary</TitleSecondary>
			<P>
					Lorem ipsum dolor sit amet, 
					ad duis discere disputationi eum, 
					eum oratio epicurei deserunt ad, 
					vidit dicam conclusionemque ex qui. 
					Alienum accusam ad has. <Highlighted>Highlighted text</Highlighted> Mei ne eros pertinacia sadipscing, ei est doctus 
					latine aperiam, te quo diam possit noluisse. 
					An soluta maiorum consetetur his, tale liber vim et.
			</P>
			<Quote> "Some quote from someone who is really clever and knows everything. "</Quote>
			<P>
					Lorem ipsum dolor sit amet, 
					ad duis discere disputationi eum, 
					eum oratio epicurei deserunt ad, 
					vidit dicam conclusionemque ex qui. 
					Alienum <UnderlinedText>Underlined text</UnderlinedText> Mei ne eros 
					pertinacia sadipscing, ei est doctus 
					latine aperiam, te quo diam possit noluisse. 
					An soluta maiorum consetetur his, tale liber vim et.
			</P><P>
					Lorem ipsum dolor sit amet, 
					ad duis discere disputationi eum, 
					eum oratio epicurei deserunt ad, 
					vidit dicam conclusionemque ex qui. 
					Alienum <TextBold> some bold text</TextBold> accusam ad has. Mei ne eros 
					pertinacia sadipscing, ei est doctus 
					latine aperiam, te quo diam possit noluisse. 
					An soluta maiorum consetetur his, tale liber vim et.
			</P><P>
					Lorem ipsum dolor sit amet, 
					ad duis discere disputationi eum, 
					eum oratio <ItalicBold> some italic bold text </ItalicBold> epicurei deserunt ad, 
					vidit dicam conclusionemque ex qui. 
					Alienum accusam ad has. Mei ne eros 
					pertinacia sadipscing, ei est doctus 
					latine aperiam, te quo diam possit noluisse. 
					An soluta maiorum consetetur his, tale liber vim et.
			</P>
		</TextWrapper>
		<SquareHashtags/>
		<ComponentHolder2>
			<ClapsBig/>
			<IconHolder/>  
		</ComponentHolder2>
		<HR/>
	</ArticleMainStyled>
);

export default ArticleMain;
