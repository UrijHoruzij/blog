import React, { useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import * as styles from './HeaderNav.module.css';

const HeaderNav = ({ data }) => {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);
	const items = data.wpgraphql.menuItems.nodes;
	return (
		<header className={classNames(styles.headerWrapper)}>
			<div className={classNames(styles.desktopWrapper)}>
				<Link className={classNames(styles.logo)} to="/">
					{data.site.siteMetadata.author}
				</Link>
				<ul className={classNames(styles.headerMenu)}>
					{items
						? items.map((item) => {
								return (
									<li className={classNames(styles.menuItem)} key={item.id}>
										<Link className={classNames(styles.menuLink)} to={item.path}>
											{item.label}
										</Link>
									</li>
								);
						  })
						: null}
				</ul>
				{items && (
					<div
						className={classNames({ [styles.hamburgerOpen]: items }, styles.hamburger)}
						open={open}
						onClick={() => setOpen(!open)}>
						<div className={classNames({ [styles.hamburgerLineOpen]: open }, styles.hamburgerLine)} />
						<div className={classNames({ [styles.hamburgerLineOpen]: open }, styles.hamburgerLine)} />
						<div className={classNames({ [styles.hamburgerLineOpen]: open }, styles.hamburgerLine)} />
					</div>
				)}
			</div>
			<div className={classNames(styles.mobileWrapper)}>
				<nav className={classNames({ [styles.mobileMenuOpen]: open }, styles.mobileMenu)}>
					{items
						? items.map((item) => {
								return (
									<li className={classNames(styles.mobileMenuItem)} key={item.id}>
										<Link className={classNames(styles.mobileMenuLink)} onClick={() => close()} to={item.path}>
											{item.label}
										</Link>
									</li>
								);
						  })
						: null}
				</nav>
			</div>
		</header>
	);
};

export default HeaderNav;
