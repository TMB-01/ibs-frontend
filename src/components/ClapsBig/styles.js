import styled from 'styled-components';

export const ClapsBigStyled = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const RoundedContainer = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 70px;
	border:  1.8px solid grey;
	border-left: 0.8px solid grey;
	border-bottom: 0.8px solid grey;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	&:hover {
		border-color: #0093DD;
		cursor: pointer;
	}
	img {
		width: 50px;
		height: 50px;
	}
`;

export const Counter = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const Number = styled.span`
	font-size: 13px;
	color: black;
`;

export const Message = styled.span`
	font-size: 12px;
	color: grey;
	@media screen and ( max-width: 768px ) {
		display: none;
	}
`;
