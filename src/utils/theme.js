const generator = require('generator-css-variables').default;
const theme = {
	name: 'light',
	grey: '#eaeaea',
	darkgrey: '#C4C4C4',
	black: '#333333',
	orange: '#9b2b11',
	'font-logo': 'Caveat',
	'font-sans': 'PT Sans',
	'font-serif': 'PT Serif',
	'pagination-font-family': 'PT Sans',
	'pagination-font-size': '16px',
	'pagination-font-weight': 400,
	'pagination-line-height': '20px',
	'pagination-colors-base': '#333333',
	'pagination-colors-hover': '#C4C4C4',
};
generator([theme], { path: 'src/components/theme/' });
