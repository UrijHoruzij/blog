const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(
		`
			{
				wpgraphql {
					posts {
						nodes {
							content
							title
							slug
							excerpt
							date
							uri
							postId
							featuredImage {
								node {
									sourceUrl
									imageFile {
										childImageSharp {
											gatsbyImageData(placeholder: BLURRED)
										}
									}
								}
							}
						}
					}
					pages {
						nodes {
							date
							slug
							title
							content
							uri
							featuredImage {
								node {
									sourceUrl
									imageFile {
										childImageSharp {
											gatsbyImageData(placeholder: BLURRED)
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	);
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const posts = result.data.wpgraphql.posts.nodes;
	const postsPerPage = 10;
	let postsPage = [];
	const numPages = Math.ceil(posts.length / postsPerPage);
	for (let j = 0; j < numPages; j++) {
		postsPage[j] = posts.slice(j * postsPerPage, j * postsPerPage + postsPerPage);
	}
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/` : `/page/${i + 1}`,
			component: path.resolve('./src/templates/blog.js'),
			context: {
				posts: postsPage[i],
				numPages,
				currentPage: i + 1,
			},
		});
	});

	const blogPostTemplate = path.resolve(`./src/templates/post/index.js`);
	result.data.wpgraphql.posts.nodes.forEach((node) => {
		const pathPost = node.slug;
		createPage({
			path: pathPost,
			component: blogPostTemplate,
			context: {
				post: node,
			},
		});
	});
	result.data.wpgraphql.posts.nodes.forEach((node) => {
		const pathPost = `${node.slug}/amp`;
		createPage({
			path: pathPost,
			component: blogPostTemplate,
			context: {
				post: node,
			},
		});
	});
	const blogPageTemplate = path.resolve(`./src/templates/page/index.js`);
	result.data.wpgraphql.pages.nodes.forEach((node) => {
		const pathPage = node.slug;
		createPage({
			path: pathPage,
			component: blogPageTemplate,
			context: {
				page: node,
			},
		});
	});
	result.data.wpgraphql.pages.nodes.forEach((node) => {
		const pathPage = `${node.slug}/amp`;
		createPage({
			path: pathPage,
			component: blogPageTemplate,
			context: {
				page: node,
			},
		});
	});
};

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = async ({ actions, cache, createNodeId, createResolvers, store, reporter }) => {
	const { createNode } = actions;

	await createResolvers({
		WPGraphQL_MediaItem: {
			imageFile: {
				type: 'File',
				async resolve(source) {
					let sourceUrl = source.sourceUrl;
					if (source.mediaItemUrl !== undefined) {
						sourceUrl = source.mediaItemUrl;
					}
					return await createRemoteFileNode({
						url: encodeURI(sourceUrl),
						store,
						cache,
						createNode,
						createNodeId,
						reporter,
					});
				},
			},
		},
	});
};
