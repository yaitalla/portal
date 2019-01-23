import React from 'react';
import { Group, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const SnakeR = ({data}) => 
	<Group>
            <Rect width={block} height={block}
				x={data.X+30} y={data.Y} fill={data.color} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={data.X+60} y={data.Y} fill={data.color} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={data.X} y={data.Y+30} fill={data.color} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={data.X+30} y={data.Y+30} fill={data.color} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Group>

export default SnakeR