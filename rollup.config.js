import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';

import {main} from './package.json';

let plugins = [
	babel({
		babelHelpers: 'bundled',
		presets: ['@babel/preset-env'],
	}),
	terser(),
];

if (process.env.ROLLUP_WATCH) {
	plugins.push(serve({
		contentBase: '',
		open: true,
	}));
}

export default {
	input: 'src/index.js',
	plugins,
	output: {
		file: main,
		format: 'umd',
		name: 'VuetifyColorInput',
	},
};
