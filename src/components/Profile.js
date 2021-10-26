import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { config } from "./"

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Photo = styled(GatsbyImage)`
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  height: 100%;
`
const ProfileName = styled.span`
  margin-top: 16px;
  font-family: ${config.fontSerif};
  font-size: 24px;
  font-weight: 700;
  color: ${config.black};
  line-height: 32px;
`
const ProfileDescription = styled.span`
  margin-top: 4px;
  font-family: ${config.fontSerif};
  font-size: 14px;
  font-weight: 400;
  color: ${config.black};
  line-height: 20px;
`
const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${config.darkgrey};
  margin-top: 32px;
`
const Profile = ({ data }) => {
  return (
    <ProfileWrapper>
      <Photo image={getImage(data.photo)} />
      <ProfileName>{data.site.siteMetadata.author}</ProfileName>
      <ProfileDescription>
        {data.site.siteMetadata.descriptionAuthor}
      </ProfileDescription>
      <Line />
    </ProfileWrapper>
  )
}

export default Profile
