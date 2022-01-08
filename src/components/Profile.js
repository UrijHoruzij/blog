import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Config } from './';

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Photo = styled(GatsbyImage)`
	max-width: 200px;
	max-height: 200px;
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const ProfileName = styled.span`
	margin-top: 16px;
	font-family: ${Config.fontSerif};
	font-size: 24px;
	font-weight: 700;
	color: ${Config.black};
	line-height: 32px;
`;
const ProfileDescription = styled.span`
	margin-top: 4px;
	font-family: ${Config.fontSerif};
	font-size: 14px;
	font-weight: 400;
	color: ${Config.black};
	line-height: 20px;
	text-align: center;
	max-width: 90%;
`;
const Line = styled.div`
	width: 72px;
	height: 2px;
	background-color: ${Config.darkgrey};
	margin-top: 32px;
`;
const Profile = ({ data }) => {
	return (
		<>
			<ProfileWrapper>
				<Photo image={getImage(data.photo)} alt={data.site.siteMetadata.author} />
				<ProfileName>{data.site.siteMetadata.author}</ProfileName>
				<ProfileDescription>{data.site.siteMetadata.descriptionAuthor}</ProfileDescription>
				<Line />
			</ProfileWrapper>
		</>
	);
};

export default Profile;
