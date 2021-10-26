import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { config } from "./"

const LastPostsWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h6`
  margin: 0;
  font-family: ${config.fontSans};
  font-size: 14px;
  font-weight: 700;
  color: ${config.black};
  line-height: 18px;
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 300px;
`
const Card = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
  height: 72px;
  text-decoration: none;
`
const CardImage = styled(GatsbyImage)`
  max-width: 72px;
  max-height: 72px;
  width: 100%;
  height: 100%;
  margin-right: 16px;
`
const CardTitle = styled.h5`
  margin: 0;
  font-family: ${config.fontSerif};
  font-size: 14px;
  font-weight: 700;
  color: ${config.black};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${config.darkgrey};
  margin-top: 32px;
`
const LastPosts = ({ data }) => {
  return (
    <LastPostsWrapper>
      <Title>Последние записи</Title>
      <Cards>
        {data.wpgraphql.posts.nodes.map(item => (
          <Card to={`/${item.slug}/`} key={item.id}>
            {item.featuredImage && (
              <CardImage
                image={getImage(item.featuredImage.node.imageFile)}
                alt={item.title}
              />
            )}
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </Cards>
      <Line />
    </LastPostsWrapper>
  )
}

export default LastPosts
