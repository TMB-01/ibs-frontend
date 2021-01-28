import styled from 'styled-components';


export const SquareHashtagsStyled = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const Hashtag = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #F2F2F2;
	text-align: center;
	border-radius: 3px;
	margin-right: 10px;
	span {
		font-size: 13px;
		color: grey;
		padding-left: 10px;
		padding-right: 10px;
	}
	&:hover {
		cursor: pointer;
	}
`;