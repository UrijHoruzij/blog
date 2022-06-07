import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from "./Profile.module.css"

const Profile = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			<GatsbyImage className={styles.photo} image={getImage(data.photo)} alt={data.site.siteMetadata.author} />
			<span className={styles.name}>{data.site.siteMetadata.author}</span>
			<span className={styles.description}>{data.site.siteMetadata.descriptionAuthor}</span>
			<div className={styles.line} />
		</div>
	);
};

export default Profile;
