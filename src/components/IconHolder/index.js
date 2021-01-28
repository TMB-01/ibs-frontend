import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
	IconHolderStyled,
	Tweeter,
	LinkedIn,
	Facebook,
	Save,
	Menu
} from './styles';

import IconTweeter from '../../assets/icons/tweeter-icon.svg';
import IconLinkedIn from '../../assets/icons/linkedin-icon-2.png';
import IconFacebook from '../../assets/icons/facebook-icon.png';
import IconSave from '../../assets/icons/save-new-2.svg';
import IconMenu from '../../assets/icons/menu-icon-empty.svg';


const IconHolder = () => (
	<IconHolderStyled>
		<Tweeter> <img src={IconTweeter} alt="tweeter-icon"/> </Tweeter>
		<LinkedIn> <img src={IconLinkedIn} alt="linkedIn-icon"/> </LinkedIn>
		<Facebook> <img src={IconFacebook} alt="facebook-icon"/> </Facebook>
		<Save> 
			<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Save story</Tooltip>}>
				<span className="d-inline-block">
					<img src={IconSave} alt="icon-save" style={{ hoverEvents: 'none' }}/>
				</span>
			</OverlayTrigger>
		</Save>
		<Menu> <img src={IconMenu} alt="menu-icon"/> </Menu>
	</IconHolderStyled>
);


export default IconHolder;
