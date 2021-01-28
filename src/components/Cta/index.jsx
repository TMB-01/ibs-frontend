import React from 'react';

import {
	Main, 
	CtaIcon, 
	CtaHeading,
	BtnGroups
} from './style';

import Icon from '../../assets/icons/lightbulb.svg';

const Cta = () => {
	return (
		<Main>
			<>
				<div>
					<CtaIcon>
						<img src={Icon} alt="icon"/>
					</CtaIcon>
					<CtaHeading>
						<h1>
							Выбирай направление и начинай свой путь в IT прямо сейчас
						</h1>
					</CtaHeading>
					<BtnGroups>
						<a href="#" className=" btn btn-black">Свяжись с нами</a>
						<a href="#" className="btn btn-purple">Пройди тестирование</a>
					</BtnGroups>
				</div>
			</>
		</Main>
	);
};


export default Cta;