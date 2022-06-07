import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from "./LastPosts.module.css"

const LastPosts = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			<h6 className={styles.title}>Последние записи</h6>
			<div className={styles.cards}>
				{data.wpgraphql.posts.nodes.map((item) => (
					<Link className={styles.card} to={`/${item.slug}/`} key={item.id}>
						{item.featuredImage && <GatsbyImage className={styles.cardImage} image={getImage(item.featuredImage.node.imageFile)} alt={item.title} />}
						<h5 className={styles.cardTitle}>{item.title}</h5>
					</Link>
				))}
			</div>
			<div className={styles.line} />
		</div>
	);
};

export default LastPosts;
