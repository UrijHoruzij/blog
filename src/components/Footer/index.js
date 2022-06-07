import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Footer.module.css'

const Footer = ({ siteTitle }) => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.row}>
				<span className={styles.date}>© {new Date().getFullYear()}</span>
				<span className={styles.logo}>{siteTitle}</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};

export default Footer;
