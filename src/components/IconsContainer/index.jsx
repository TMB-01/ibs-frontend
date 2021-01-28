import React from 'react';
import { Row, RowItem, Icon } from './styles';

import GlobeIcon from '../../assets/icons/globe.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import AnalysisIcon from '../../assets/icons/analysis.svg';
import StartUpIcon from '../../assets/icons/startup.svg';
import LightBulbIcon from '../../assets/icons/lightbulb.svg';
import LoupeIcon from '../../assets/icons/loupe.svg';

const IconsContainer = () => {
	return (
		<>
			<Row>
				<RowItem>
					<Icon>
						<img className="icons" src={GlobeIcon} alt="globe"/>
					</Icon>
					<p className="about">Преподаватели - практики</p>
				</RowItem>
				<RowItem>
					<Icon>
						<img className="icons" src={LightBulbIcon} alt="lightBulb"/>
					</Icon>
					<p className="about">Преподаватели - практики</p>
				</RowItem>
				<RowItem>
					<Icon>
							<img className="icons" src={LoupeIcon} alt="loupe"/>
					</Icon>
					<p className="about">Преподаватели - практики</p>
				</RowItem>
				<RowItem>
					<Icon>
						<img className="icons" src={StartUpIcon} alt="startUp"/>
					</Icon>
					<p className="about">Преподаватели - практики</p>
				</RowItem>
				<RowItem>
					<Icon>
						<img className="icons" src={SettingsIcon} alt="settings"/>
					</Icon>
						<p className="about">Преподаватели - практики</p>
				</RowItem>
				<RowItem>
					<Icon>
						<img className="icons" src={AnalysisIcon} alt="analysis"/>
					</Icon>
					<p className="about">Преподаватели - практики</p>
				</RowItem>
			</Row>
		</>
	);
}

export default IconsContainer;