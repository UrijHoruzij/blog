import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { HeaderNav, Header, Footer, Sidebar, Main, Container } from '../';
import { getImage } from 'gatsby-plugin-image';
import 'normalize.css';
import '@wordpress/block-library/build-style/style.css';
import * as styles from './Layout.module.css';
import * as theme from '../theme/light.module.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query LayoutQuery {
			photo: file(relativePath: { eq: "photo2.jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
				}
			}
			site {
				siteMetadata {
					author
					descriptionAuthor
				}
			}
			wpgraphql {
				menuItems {
					nodes {
						path
						label
						id
					}
				}
				posts(first: 3) {
					nodes {
						id
						slug
						title
						featuredImage {
							node {
								sourceUrl
								imageFile {
									childImageSharp {
										gatsbyImageData(placeholder: BLURRED, height: 255)
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	return (
		<div className={theme.root}>
			<script type="application/ld+json">
				{`{
				"@context": "https://schema.org/",
				"@type": "Person",
				"name": ${data.site.siteMetadata.author},
				"image": ${getImage(data.photo)},
				"description": ${data.site.siteMetadata.descriptionAuthor} 
				}`}
			</script>
			<Container>
				<HeaderNav data={data} />
			</Container>
			<Header data={data} />
			<Container>
				<div className={styles.wrapper}>
					<Main>{children}</Main>
					<Sidebar data={data} />
				</div>
			</Container>
			<Footer siteTitle={data.site.siteMetadata.author} />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
