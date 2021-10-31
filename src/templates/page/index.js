import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import styled from "styled-components"
import {
  Layout,
  CommentForm,
  CommentList,
  Seo,
  config,
} from "../../components/"
import dateFormat from "../../utils/dateFormat"
const Title = styled.h1`
  width: 100%;
  font-family: ${config.fontSerif};
  font-size: 24px;
  font-weight: 700;
  color: ${config.black};
  line-height: 32px;
  margin: 0;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  @media ${config.breakpoints.xs} {
    margin: auto 8px;
    margin-top: 24px;
  }
  @media ${config.breakpoints.sm} {
    margin: 0;
    margin-top: 24px;
  }
`
const DateArticle = styled.div`
  width: 100%;
  margin-top: 12px;
  font-family: ${config.fontSans};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 24px;
  display: flex;
  justify-content: center;
  @media ${config.breakpoints.xs} {
    margin: auto 8px;
    margin-top: 12px;
  }
  @media ${config.breakpoints.sm} {
    margin: 0;
    margin-top: 12px;
  }
`
const FeaturedImage = styled(GatsbyImage)`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  height: 100%;
`
const Article = styled.div`
  width: 100%;
`
const Content = styled.div`
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 28px;
  img {
    margin-top: 24px;
    width: 100%;
    height: auto;
  }
  figure {
    margin-bottom: 24px;
  }
  figcaption {
    display: flex;
    justify-content: center;
  }
  @media ${config.breakpoints.xs} {
    margin: auto 8px;
  }
  @media ${config.breakpoints.sm} {
    margin: 0;
  }
`

const Page = ({ pageContext }) => {
  const { page } = pageContext
  let featuredImageUrl
  if (page.featuredImage) {
    featuredImageUrl = getImage(page.featuredImage.node.imageFile)
  }
  return (
    <Layout>
      <Seo title={page.title} />
      <Article>
        {page.featuredImage && (
          <FeaturedImage image={featuredImageUrl} alt={page.title} />
        )}
        <Title>{page.title}</Title>
        {page.content && <Content>{parse(page.content)}</Content>}
      </Article>
    </Layout>
  )
}

export default Page
