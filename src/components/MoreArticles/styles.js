import styled from 'styled-components';


export const MoreArticlesStyled = styled.div`
	width: 27vw;
	height: fit-content;
	margin-bottom: 30px;
	@media screen and ( max-width: 900px ) {
		width: 90vw;
	}
	@media screen and ( max-width: 550px ) {
		width: 88vw;
	}
`;

export const Heading  = styled.div`
	font-size: 20px;
	line-height: 25px;
	padding-top: 20px;
	margin-bottom: 20px;
`;

export const  Title = styled.h1`
	font-size: 13px;
	font-weight: 300;
	color: grey;
	padding-bottom: 5px;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 50%;
	background-size: cover;
	background-position: center;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and ( min-width: 550px ) and ( max-width: 900px ) {
		img {
			width: 380px;
			height: 280px;
		}
	}
	@media screen and ( min-width: 550px ) and ( max-width: 800px ) {
		img {
			width: 300px;
			height: 230px;
		}
	}
	@media screen and ( min-width: 550px ) and ( max-width: 768px ) {
		img {
			width: 250px;
			height: 180px;
		}
	}   
	@media screen and ( min-width: 550px ) and ( max-width: 600px ) {
		img {
			width: 200px;
			height: 120px;
		}
	}
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media screen and ( min-width: 551px ) and ( max-width: 900px ) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const AccountContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
`;

export const Row1 = styled.div`
	@media screen and ( min-width: 551px ) and ( max-width: 900px ) {
		order: 2;
	}
`;

export const Row2 = styled.div`
	@media screen and  ( min-width: 551px ) and ( max-width: 900px ) {
		order: 1;
	}
`;