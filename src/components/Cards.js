import React from "react"
import { getImage } from "gatsby-plugin-image"

import { Card } from "./"
import dateFormat from "../utils/dateFormat"
const Cards = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        let featuredImage
        if (post.featuredImage) {
          featuredImage = getImage(post.featuredImage.node.imageFile)
        }
        if (index % 2 === 0) {
          return (
            <Card
              type={1}
              post={post}
              date={dateFormat(post.date)}
              featuredImage={featuredImage}
              key={index}
            />
          )
        } else {
          return (
            <Card
              type={2}
              post={post}
              date={dateFormat(post.date)}
              featuredImage={featuredImage}
              key={index}
            />
          )
        }
      })}
    </div>
  )
}

export default Cards
