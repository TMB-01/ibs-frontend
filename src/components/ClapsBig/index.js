import React from 'react';

import { 
	ClapsBigStyled, 
	RoundedContainer, 
	Counter, 
	Number, 
	Message 
} from './styles';

import ClapsIcon from '../../assets/icons/claps-icon-2-blue.svg';


const ClapsBig = () => (
	<ClapsBigStyled>
		<RoundedContainer>
			<img src={ClapsIcon} alt="claps-icon"/>
		</RoundedContainer>
		<Counter>
			<Number>305 claps</Number>
			<Message> You and 304 others clapped</Message>
		</Counter>
	</ClapsBigStyled>
);

export default ClapsBig;