import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import * as styles from './Card.module.css';

const Card = ({ post, featuredImage, date, type }) => {
	if (type === 1) {
		return (
			<div className={classNames({ [styles.wrapperImage]: type === 2 }, styles.wrapper)}>
				{featuredImage && <GatsbyImage className={styles.image} image={featuredImage} alt={post.title} />}
				<div
					className={classNames(
						{ [styles.containerLeft]: type === 2, [styles.containerRight]: type === 1 },
						styles.container,
					)}>
					<Link className={styles.title} to={`/${post.slug}/`}>
						{post.title}
					</Link>
					<span className={styles.date}>{date}</span>
					<p className={styles.content}>{parse(post.excerpt)}</p>
					<Link className={styles.link} to={`/${post.slug}/`}>
						Читать дальше
						<svg
							className={styles.arrow}
							width="31"
							height="13"
							viewBox="0 0 31 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M30.1466 6.06014C30.0852 5.93729 29.993 5.82505 29.8754 5.72987L23.417 0.725674C23.2966 0.632357 23.1536 0.558334 22.9963 0.507832C22.8389 0.457329 22.6703 0.431335 22.5 0.431335C22.156 0.431335 21.8261 0.537212 21.5829 0.725674C21.4625 0.81899 21.3669 0.929774 21.3017 1.0517C21.2366 1.17362 21.203 1.3043 21.203 1.43627C21.203 1.70279 21.3397 1.9584 21.5829 2.14686L25.8454 5.43962H1.83329C1.49072 5.43962 1.16218 5.54507 0.919947 5.73276C0.677712 5.92045 0.541626 6.17502 0.541626 6.44046C0.541626 6.7059 0.677712 6.96047 0.919947 7.14816C1.16218 7.33585 1.49072 7.4413 1.83329 7.4413H25.8454L21.5829 10.7341C21.4618 10.8271 21.3657 10.9378 21.3001 11.0598C21.2346 11.1817 21.2008 11.3125 21.2008 11.4447C21.2008 11.5768 21.2346 11.7076 21.3001 11.8296C21.3657 11.9515 21.4618 12.0622 21.5829 12.1552C21.703 12.2491 21.8458 12.3235 22.0032 12.3743C22.1606 12.4251 22.3295 12.4513 22.5 12.4513C22.6705 12.4513 22.8393 12.4251 22.9967 12.3743C23.1541 12.3235 23.297 12.2491 23.417 12.1552L29.8754 7.15106C29.993 7.05587 30.0852 6.94363 30.1466 6.82078C30.2758 6.57711 30.2758 6.30381 30.1466 6.06014Z"
								fill="#333333"
							/>
						</svg>
					</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className={classNames({ [styles.wrapperImage]: type === 2 }, styles.wrapper)}>
				<div
					className={classNames(
						{ [styles.containerLeft]: type === 2, [styles.containerRight]: type === 1 },
						styles.container,
					)}>
					<Link className={styles.title} to={`/${post.slug}/`}>
						{post.title}
					</Link>
					<span className={styles.date}>{date}</span>
					<p className={styles.content}>{parse(post.excerpt)}</p>
					<Link className={styles.link} to={`/${post.slug}/`}>
						Читать дальше
						<svg
							className={styles.arrow}
							width="31"
							height="13"
							viewBox="0 0 31 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M30.1466 6.06014C30.0852 5.93729 29.993 5.82505 29.8754 5.72987L23.417 0.725674C23.2966 0.632357 23.1536 0.558334 22.9963 0.507832C22.8389 0.457329 22.6703 0.431335 22.5 0.431335C22.156 0.431335 21.8261 0.537212 21.5829 0.725674C21.4625 0.81899 21.3669 0.929774 21.3017 1.0517C21.2366 1.17362 21.203 1.3043 21.203 1.43627C21.203 1.70279 21.3397 1.9584 21.5829 2.14686L25.8454 5.43962H1.83329C1.49072 5.43962 1.16218 5.54507 0.919947 5.73276C0.677712 5.92045 0.541626 6.17502 0.541626 6.44046C0.541626 6.7059 0.677712 6.96047 0.919947 7.14816C1.16218 7.33585 1.49072 7.4413 1.83329 7.4413H25.8454L21.5829 10.7341C21.4618 10.8271 21.3657 10.9378 21.3001 11.0598C21.2346 11.1817 21.2008 11.3125 21.2008 11.4447C21.2008 11.5768 21.2346 11.7076 21.3001 11.8296C21.3657 11.9515 21.4618 12.0622 21.5829 12.1552C21.703 12.2491 21.8458 12.3235 22.0032 12.3743C22.1606 12.4251 22.3295 12.4513 22.5 12.4513C22.6705 12.4513 22.8393 12.4251 22.9967 12.3743C23.1541 12.3235 23.297 12.2491 23.417 12.1552L29.8754 7.15106C29.993 7.05587 30.0852 6.94363 30.1466 6.82078C30.2758 6.57711 30.2758 6.30381 30.1466 6.06014Z"
								fill="#333333"
							/>
						</svg>
					</Link>
				</div>
				{featuredImage && <GatsbyImage className={styles.image} image={featuredImage} alt={post.title} />}
			</div>
		);
	}
};

export default Card;
