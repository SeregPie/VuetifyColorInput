import BackgroundPattern from './BackgroundPattern';

// todo

export default function(gridSize, foregroundColor, backgroundColor) {
	let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill="${foregroundColor}"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>`;
	let size = gridSize * 2;
	return BackgroundPattern(svg, size, backgroundColor);
}
