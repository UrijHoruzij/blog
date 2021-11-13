import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Config } from './';
import styled, { css } from 'styled-components';
import arrow from '../images/arrow.svg';

const changeType = (type) => {
	if (type === 1) {
		return css`
			margin-right: 30px;
		`;
	} else {
		return css`
			margin-left: 30px;
		`;
	}
};
const changeTypeImage = (type) => {
	if (type === 2) {
		return css`
			justify-content: space-between;
		`;
	}
};
const CardWrapper = styled.div`
	display: flex;
	margin-bottom: 32px;
	${(props) => changeTypeImage(props.type)};
	@media ${Config.breakpoints.xs} {
		align-items: center;
		flex-direction: column;
	}
	@media ${Config.breakpoints.md} {
		flex-direction: row;
	}
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	${(props) => changeType(props.type)};
	@media ${Config.breakpoints.xs} {
		margin: 0;
		margin-top: 16px;
		margin-bottom: 16px;
	}
	@media ${Config.breakpoints.md} {
		${(props) => changeType(props.type)};
		margin-top: 0;
		margin-bottom: 0;
	}
`;
const Image = styled(GatsbyImage)`
	width: 100%;
	max-height: 255px;
	max-width: 255px;
	@media ${Config.breakpoints.xs} {
		width: 100%;
		height: auto;
		object-fit: cover;
		max-height: 255px;
		max-width: 100%;
	}
	@media ${Config.breakpoints.md} {
		width: 100%;
		max-height: 255px;
		max-width: 255px;
	}
`;
const CardTitle = styled(Link)`
	font-family: ${Config.fontSerif};
	font-size: 24px;
	font-weight: 700;
	color: ${Config.black};
	line-height: 32px;
	margin: 0;
	display: flex;
	flex-direction: column;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-decoration: none;
`;
const CardDate = styled.span`
	margin-top: 12px;
	font-family: ${Config.fontSans};
	font-size: 18px;
	font-weight: 400;
	color: ${Config.black};
	line-height: 24px;
`;
const CardContent = styled.p`
	margin-top: 24px;
	font-family: ${Config.fontSerif};
	font-size: 18px;
	font-weight: 400;
	color: ${Config.black};
	line-height: 24px;
	display: flex;
	flex-direction: column;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	p {
		margin: 0;
	}
`;
const CardLink = styled(Link)`
	text-decoration: none;
	margin-top: 16px;
	font-family: ${Config.fontSans};
	font-size: 18px;
	font-weight: 700;
	color: ${Config.black};
	transition: all 0.3s ease-in-out;
	&:hover::after {
		margin-left: 20px;
	}
	&::after {
		content: url(${arrow});
		margin-left: 12px;
		transition: all 0.3s ease-in-out;
	}
`;

const Card = ({ post, featuredImage, date, type }) => {
	if (type === 1) {
		return (
			<CardWrapper itemscope itemtype="http://schema.org/Thing" type={type}>
				{featuredImage && <Image itemprop="image" image={featuredImage} alt={post.title} />}
				<Content>
					<CardTitle itemprop="name" to={`/${post.slug}/`}>
						{post.title}
					</CardTitle>
					<CardDate>{date}</CardDate>
					<CardContent itemprop="description">{parse(post.excerpt)}</CardContent>
					<CardLink itemprop="url" to={`/${post.slug}/`}>
						Читать дальше
					</CardLink>
				</Content>
			</CardWrapper>
		);
	} else {
		return (
			<CardWrapper itemscope itemtype="http://schema.org/Thing" type={type}>
				<Content>
					<CardTitle itemprop="name" to={`/${post.slug}/`}>
						{post.title}
					</CardTitle>
					<CardDate>{date}</CardDate>
					<CardContent itemprop="description">{parse(post.excerpt)}</CardContent>
					<CardLink itemprop="url" to={`/${post.slug}/`}>
						Читать дальше
					</CardLink>
				</Content>
				{featuredImage && <Image itemprop="image" image={featuredImage} alt={post.title} />}
			</CardWrapper>
		);
	}
};

export default Card;
