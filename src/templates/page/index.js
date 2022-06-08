import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { Layout, Seo } from '../../components/';
import * as styles from '../Global.module.css';

const Page = ({ pageContext }) => {
	const { page } = pageContext;
	let featuredImageUrl = '';
	if (page.featuredImage) {
		featuredImageUrl = getImage(page.featuredImage.node.imageFile);
	}
	return (
		<Layout>
			<Seo title={page.title}>
				<script type="application/ld+json">
					{`{
				"@context": "https://schema.org/",
				"@type": "Thing",
				"name": ${page.title},
				"image": ${featuredImageUrl},
				"description": ${page.excerpt},
				"url": /${page.slug}/
				}`}
				</script>
			</Seo>
			<div className={styles.article}>
				{page.featuredImage && (
					<GatsbyImage className={styles.featuredImage} image={featuredImageUrl} alt={page.title} />
				)}
				<h1 className={styles.title}>{page.title}</h1>
				{page.content && <div className={styles.content}>{parse(page.content)}</div>}
			</div>
		</Layout>
	);
};

export default Page;
