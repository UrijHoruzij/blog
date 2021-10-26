import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import { config } from "./"
import styled, { css } from "styled-components"
import arrow from "../images/arrow.svg"

const changeType = type => {
  if (type === 1) {
    return css`
      margin-right: 30px;
    `
  } else {
    return css`
      margin-left: 30px;
    `
  }
}
const changeTypeImage = type => {
  console.log(type)
  if (type === 2) {
    return css`
      justify-content: space-between;
    `
  }
}
const CardWrapper = styled.div`
  display: flex;

  margin-bottom: 32px;
  ${props => changeTypeImage(props.type)};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${props => changeType(props.type)};
`
const Image = styled(GatsbyImage)`
  width: 100%;
  max-height: 255px;
  max-width: 255px;
`
const CardTitle = styled(Link)`
  font-family: ${config.fontSerif};
  font-size: 24px;
  font-weight: 700;
  color: ${config.black};
  line-height: 32px;
  margin: 0;
  display: flex;
  flex-direction: column;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-decoration: none;
`
const CardDate = styled.span`
  margin-top: 12px;
  font-family: ${config.fontSans};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 24px;
`
const CardContent = styled.p`
  margin-top: 24px;
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 24px;
  display: flex;
  flex-direction: column;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
const CardLink = styled(Link)`
  text-decoration: none;
  margin-top: 16px;
  font-family: ${config.fontSans};
  font-size: 18px;
  font-weight: 700;
  color: ${config.black};
  transition: all 0.3s ease-in-out;
  &:hover::after {
    margin-left: 20px;
  }
  &::after {
    content: url(${arrow});
    margin-left: 12px;
    transition: all 0.3s ease-in-out;
  }
`

const Card = ({ post, featuredImage, date, type }) => {
  if (type === 1) {
    return (
      <CardWrapper type={type}>
        {featuredImage && <Image image={featuredImage} alt={post.title} />}
        <Content>
          <CardTitle to={`/${post.slug}/`}>{post.title}</CardTitle>
          <CardDate>{date}</CardDate>
          <CardContent>{parse(post.excerpt)}</CardContent>
          <CardLink to={`/${post.slug}/`}>Читать дальше</CardLink>
        </Content>
      </CardWrapper>
    )
  } else {
    return (
      <CardWrapper type={type}>
        <Content>
          <CardTitle to={`/${post.slug}/`}>{post.title}</CardTitle>
          <CardDate>{date}</CardDate>
          <CardContent>{parse(post.excerpt)}</CardContent>
          <CardLink to={`/${post.slug}/`}>Читать дальше</CardLink>
        </Content>
        {featuredImage && <Image image={featuredImage} alt={post.title} />}
      </CardWrapper>
    )
  }
}

export default Card
