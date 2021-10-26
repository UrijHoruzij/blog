import React from "react"
import { Layout, CommentForm, CommentList, Seo } from "../../components/"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const Post = ({ pageContext }) => {
  const { post } = pageContext
  const featuredImage = getImage(post.featuredImage)
  return (
    <Layout>
      <Seo title={post.title} />
      {post.featuredImage && (
        <GatsbyImage image={featuredImage} alt={post.title} />
      )}
      <h1>{post.title}</h1>
      {post.content && <div>{parse(post.content)}</div>}
      <CommentForm postId={post.postId}></CommentForm>
      <CommentList postId={post.postId}></CommentList>
    </Layout>
  )
}

export default Post
