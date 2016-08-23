import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	plugins: [
		nodeResolve({
			browser: true
		})
	],
	format: 'iife'
};
