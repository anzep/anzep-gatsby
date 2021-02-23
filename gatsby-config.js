module.exports = {
	siteMetadata: {
		title: 'anzep-gatsby',
	},
	plugins: [
		'gatsby-plugin-emotion',
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				isResettingCSS: true,
				isUsingColorMode: true,
			},
		},
	],
};
