import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Config } from './';

const checkEmpty = (items) => {
	if (items) {
		return css`
			display: flex; ;
		`;
	} else {
		return css`
			display: none;
		`;
	}
};

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	max-height: 100%;
	@media ${Config.breakpoints.xs} {
		margin: auto 8px;
	}
	@media ${Config.breakpoints.sm} {
		margin: 0;
	}
`;
const DesktopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 58px;
`;
const MobileWrapper = styled.div`
	display: none;
	@media ${Config.breakpoints.xs} {
		display: block;
	}
	@media ${Config.breakpoints.lg} {
		display: none;
	}
`;
const HeaderLogo = styled(Link)`
	text-decoration: none;
	font-family: ${Config.fontLogo};
	font-size: 24px;
	font-weight: 400;
	line-height: 30px;
	color: ${Config.black};
`;
const HeaderMenu = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	@media ${Config.breakpoints.xs} {
		display: none;
	}
	@media ${Config.breakpoints.lg} {
		display: flex;
	}
`;
const MenuItem = styled.li`
	list-style: none;
	padding-left: 36px;
`;
const MenuLink = styled(Link)`
	text-decoration: none;
	font-family: ${Config.fontSans};
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	color: ${Config.black};
	transition: all 0.3s ease-in-out;
	&:hover {
		text-decoration: underline;
		color: ${Config.black};
	}
`;
const Hamburger = styled.div`
	display: none;
	position: relative;
	${(props) => checkEmpty(props.items)}
	@media ${Config.breakpoints.xs} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		height: 24px;
	}
	@media ${Config.breakpoints.lg} {
		display: none;
	}
`;
const HamburgerLine = styled.div`
	width: 32px;
	height: 2px;
	background-color: ${Config.black};
	&:nth-child(1) {
		${(props) =>
			props.open
				? css`
						position: absolute;
						transform: rotate(45deg) translateY(16px);
				  `
				: css``};
	}
	&:nth-child(2) {
		display: ${(props) => (props.open ? 'none' : 'block')};
	}
	&:nth-child(3) {
		${(props) =>
			props.open
				? css`
						position: absolute;
						transform: rotate(-45deg) translateX(-16px);
				  `
				: css``};
	}
`;

const MobileMenu = styled.nav`
	display: ${(props) => (props.open ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	transition: all 0.3s ease-in-out;
`;
const MobileMenuItem = styled.li`
	list-style: none;
	padding-top: 12px;
	padding-bottom: 12px;
`;
const MobileMenuLink = styled(Link)`
	text-decoration: none;
	font-family: ${Config.fontSans};
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	color: ${Config.black};
	transition: all 0.3s ease-in-out;
	&:hover {
		text-decoration: underline;
		color: ${Config.black};
	}
`;
const HeaderNav = ({ data }) => {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);
	return (
		<HeaderWrapper>
			<DesktopWrapper>
				<HeaderLogo to="/">{data.site.siteMetadata.author}</HeaderLogo>
				<HeaderMenu>
					{data.wpgraphql.menuItems.nodes
						? data.wpgraphql.menuItems.nodes.map((item) => {
								return (
									<MenuItem key={item.id}>
										<MenuLink to={item.path}>{item.label}</MenuLink>
									</MenuItem>
								);
						  })
						: null}
				</HeaderMenu>
				{data.wpgraphql.menuItems.nodes && (
					<Hamburger items={data.wpgraphql.menuItems.nodes} open={open} onClick={() => setOpen(!open)}>
						<HamburgerLine open={open} />
						<HamburgerLine open={open} />
						<HamburgerLine open={open} />
					</Hamburger>
				)}
			</DesktopWrapper>
			<MobileWrapper>
				<MobileMenu open={open}>
					{data.wpgraphql.menuItems.nodes
						? data.wpgraphql.menuItems.nodes.map((item) => {
								return (
									<MobileMenuItem key={item.id}>
										<MobileMenuLink onClick={() => close()} to={item.path}>
											{item.label}
										</MobileMenuLink>
									</MobileMenuItem>
								);
						  })
						: null}
				</MobileMenu>
			</MobileWrapper>
		</HeaderWrapper>
	);
};

export default HeaderNav;
