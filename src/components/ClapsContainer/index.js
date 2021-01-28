import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { 
	ClapsContainerStyled, 
	IconWrapper, 
	IconWrapperSave, 
	Number,
	Line
} from './styles';


import ClapsIcon from '../../assets/icons/claps-icon-2.svg';
import IconSave from '../../assets/icons/save-new-2.svg';


const ClapsContainer = () => (
	<ClapsContainerStyled>
		<IconWrapper>
			<img src={ClapsIcon} alt="claps-icon"/>
		</IconWrapper>
		<Number>4k</Number>
		<Line/>
		<IconWrapperSave>
		<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Save story</Tooltip>}>
			<span className="d-inline-block">
				<img src={IconSave} alt="icon-save" style={{ hoverEvents: 'none' }}/>
			</span>
			</OverlayTrigger> 
		</IconWrapperSave>
	</ClapsContainerStyled>
);


export default ClapsContainer;