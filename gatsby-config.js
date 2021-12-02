module.exports = {
	siteMetadata: {
		title: `Елена Хоружая`,
		description: `Личный сайт учителя физики Хоружей Елены Степановны.`,
		author: `Елена Хоружая`,
		descriptionAuthor: 'учитель физики высшей квалификационной категории, старший учитель',
		siteUrl: 'https://elenahoruzaya.netlify.app/',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `elena-horuzaya`,
				short_name: `elena-horuzaya`,
				start_url: `/`,
				background_color: `#29db7c`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-offline`,
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'WPGraphQL',
				fieldName: 'wpgraphql',
				url: 'http://helen.insomnia247.nl/graphql',
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
	],
};
