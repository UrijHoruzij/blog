import React from "react"
import styled from "styled-components"
import { config } from "./"
import pattern from "../images/pattern.png"

const HeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 224px;
  background-image: url(${pattern});
  background-repeat: repeat-x;
`
const Author = styled.div`
  font-family: ${config.fontSerif};
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
  margin-bottom: 8px;
  color: ${config.black};
`
const Description = styled.div`
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${config.black};
`

const Header = ({ data }) => {
  return (
    <HeaderWrapper>
      <Author>{data.site.siteMetadata.author}</Author>
      <Description>{data.site.siteMetadata.descriptionAuthor}</Description>
    </HeaderWrapper>
  )
}

export default Header
