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
  display: flex;
  justify-content: center;
  font-family: ${config.fontSerif};
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
  margin-bottom: 8px;
  color: ${config.black};
  @media ${config.breakpoints.xs} {
    font-size: 36px;
    line-height: 48px;
  }
  @media ${config.breakpoints.sm} {
    font-size: 48px;
    line-height: 64px;
  }
`
const Description = styled.div`
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${config.black};
  display: flex;
  justify-content: center;
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
