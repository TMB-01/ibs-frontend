import React from 'react';

import { AboutStatistics, StatisticsItem } from './style';

const Statistics = () => {
	return (
		<AboutStatistics>
			<StatisticsItem>
				<h1 style={{marginTop: 0, marginBottom: 0, marginRight: 12}}>
				{'>'}100
				</h1>
				<p>лет общий стаж наших преподавателей</p>
			</StatisticsItem>
			<StatisticsItem>
				<h1 style={{ marginTop: 0, marginBottom: 0, marginRight: 12}}>
					1500
				</h1>
				<p>кв.м. общая площадь здания</p>
			</StatisticsItem>
			<StatisticsItem>
				<h1 style={{marginTop: 0, marginBottom: 0, marginRight: 12}}>
				{'>'}90
				</h1>
				<p>мест коворкинг зона</p>
			</StatisticsItem>
			<StatisticsItem>
				<h1 style={{marginTop: 0, marginBottom: 0, marginRight: 12}}>
				{'>'}150
				</h1>
				<p>мест ивент зона</p>
			</StatisticsItem>
		</AboutStatistics>
	);
};

export default Statistics;