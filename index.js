import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
	plugins: [
		nodeResolve({
			browser: true
		}),
		commonJS()
	],
	format: 'iife'
};
