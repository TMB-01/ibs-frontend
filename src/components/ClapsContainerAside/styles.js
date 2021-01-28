import styled from 'styled-components';


export const ClapsAsideStyled = styled.div`
	width: 80px;
	height: fit-content;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	position: fixed;
	overflow: none;
	margin-top: 200px;
	margin-left: 60px;
	@media screen and ( max-width: 1200px ) {
		display: none;
	}
`;

export const IconWrapper = styled.div`
	width: 40px;
	height: 40px;
	img {
		width: 100%;
		height: 100%;
		&:hover {
			cursor: pointer;
		}
	}
`;


export const IconWrapperSave = styled.div`
	width: 26px;
	margin-left: 8px;
	margin-top: 5px;
	img {
		width: 100%;
		height: 100%;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Number = styled.div`
	font-size: 14px;
	color: grey;
	margin-right: 4px;
	&:hover {
		color: black;
		cursor: pointer;
	}
`;