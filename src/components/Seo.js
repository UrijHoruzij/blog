import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, title, children }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: 'yandex-verification',
					content: 'bb3ce2ae58ece98e',
				},
				{
					name: 'google-site-verification',
					content: '9pUYNhjfrnGyQfEr_B3W_6Nr0JgOzfH4RDOAzi4a-F0',
				},
				{
					name: `keywords`,
					content:
						'elenahoruzaya.netlify.app,ЛНР,учитель физики,Хоружая Елена Степановна,Елена Хоружая,старший учитель,Брянка,Брянковский УВК №17,заместитель директора по учебно-воспитательной работе,заместитель директора',
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
			].concat(meta)}>
			{children}
		</Helmet>
	);
}

Seo.defaultProps = {
	lang: `ru`,
	meta: [],
	description: ``,
};

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Seo;
