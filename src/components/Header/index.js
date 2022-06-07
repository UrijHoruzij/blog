import React from 'react';
import * as styles from './Header.module.css';
import pattern from '../../images/pattern.png';

const Header = ({ data }) => {
	return (
		<div style={{ backgroundImage: `url(${pattern})` }} className={styles.wrapper}>
			<div className={styles.author}>{data.site.siteMetadata.author}</div>
			<div className={styles.description}>{data.site.siteMetadata.descriptionAuthor}</div>
		</div>
	);
};

export default Header;
