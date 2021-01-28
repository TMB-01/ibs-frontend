import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	padding-left: 70px;
	padding-right: 70px;
	padding-top: 40px;
	padding-bottom: 30px;
	background-color: #FAFAFA;
	z-index: 5000;
`;

export const Title = styled.h1`
	font-size: 19px;
	font-weight: 500;
	color: black;
	line-height: 20px;
	margin-bottom: 10px;
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: space-around;
	@media screen and ( max-width: 900px ) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	@media screen and ( max-width: 550px ) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
`;

export const HR = styled.hr`
	width: 100%;
	border-color: #BABABA;
	opacity: 0.5;
	margin-bottom: 40px;
`;

