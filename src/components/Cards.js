import React from "react"
import { getImage } from "gatsby-plugin-image"

import { Card } from "./"

const Cards = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        let featuredImage
        if (post.featuredImage) {
          featuredImage = getImage(post.featuredImage.node.imageFile)
        }
        let month =
          "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
            ","
          )
        const date = new Date(post.date)
        const dateStr =
          date.getDate() +
          " " +
          month[date.getMonth()] +
          ", " +
          date.getFullYear()

        if (index % 2 === 0) {
          return (
            <Card
              type={1}
              post={post}
              date={dateStr}
              featuredImage={featuredImage}
              key={post.id}
            />
          )
        } else {
          return (
            <Card
              type={2}
              post={post}
              date={dateStr}
              featuredImage={featuredImage}
              key={post.id}
            />
          )
        }
      })}
    </div>
  )
}

export default Cards
