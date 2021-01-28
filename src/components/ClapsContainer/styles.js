import styled from 'styled-components';


export const ClapsContainerStyled = styled.div`
	width: 100px;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;
	@media screen and ( min-width: 550px ) and ( max-width: 900px ) {
		margin-left: -50px;
	}
	@media screen  and ( min-width: 550px ) and ( max-width: 768px ) {
		margin-left: -70px;
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

export const Line = styled.div`
	height: 26px;
	border-right: 0.8px solid #E1E1E1;
`;

export const IconWrapperSave = styled.div`
	width: 26px;
	img {
		width: 100%;
		height: 100%;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Number = styled.div`
	font-size: 16px;
	color: grey;
	margin-right: 4px;
`;