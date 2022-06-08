import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { Layout, CommentForm, CommentsList, Seo } from '../../components/';
import { dateFormat } from '../../utils';
import * as styles from '../Global.module.css';

const Post = ({ pageContext }) => {
	const { post } = pageContext;
	let featuredImageUrl = '';
	if (post.featuredImage) {
		featuredImageUrl = getImage(post.featuredImage.node.imageFile);
	}
	return (
		<Layout>
			<Seo title={post.title}>
				<script type="application/ld+json">
					{`{
				"@context": "https://schema.org/",
				"@type": "Thing",
				"name": ${post.title},
				"image": ${featuredImageUrl},
				"description": ${post.excerpt},
				"url": /${post.slug}/
				}`}
				</script>
			</Seo>
			<div className={styles.article}>
				{post.featuredImage && (
					<GatsbyImage className={styles.featuredImage} image={featuredImageUrl} alt={post.title} />
				)}
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.dateArticle}>{dateFormat(post.date)}</div>
				{post.content && <div className={styles.content}>{parse(post.content)}</div>}
				<CommentsList postId={post.postId}></CommentsList>
				<CommentForm postId={post.postId}></CommentForm>
			</div>
		</Layout>
	);
};

export default Post;
