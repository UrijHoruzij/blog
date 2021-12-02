import React from 'react';
import styled from 'styled-components';
import { Config } from './';
import pattern from '../images/pattern.png';

const HeaderWrapper = styled.div`
	grid-area: header;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 224px;
	background-image: url(${pattern});
	background-repeat: repeat-x;
`;
const Author = styled.div`
	display: flex;
	justify-content: center;
	font-family: ${Config.fontSerif};
	font-size: 48px;
	font-weight: 700;
	line-height: 64px;
	margin-bottom: 8px;
	color: ${Config.orange};
	@media ${Config.breakpoints.xs} {
		font-size: 36px;
		line-height: 48px;
	}
	@media ${Config.breakpoints.sm} {
		font-size: 48px;
		line-height: 64px;
	}
`;
const Description = styled.div`
	font-family: ${Config.fontSerif};
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	color: ${Config.black};
	display: flex;
	justify-content: center;
`;

const Header = ({ data }) => {
	return (
		<HeaderWrapper>
			<Author>{data.site.siteMetadata.author}</Author>
			<Description>{data.site.siteMetadata.descriptionAuthor}</Description>
		</HeaderWrapper>
	);
};

export default Header;
