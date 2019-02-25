
const source =  {
    tetriminos: {
		stick: [
				[2, 2, 2, 2],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
        ],
			square: [
				[2, 2, 0, 0],
				[2, 2, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			cross: [
				[0, 2, 0, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			L: [
				[0, 0, 2, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			mirrorL: [
				[2, 0, 0, 0],
				[2, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			snakeL: [
				[2, 2, 0, 0],
				[0, 2, 2, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			snakeR: [
				[0, 2, 2, 0],
				[2, 2, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
	},
    gridHeight: 600,
    gridWidth: 260,
    shapes: [
        'L', 'mirrorL', 'snakeL', 'snakeR', 'cross', 'stick', 'square'
    ],
    block: 24
}

export default source;