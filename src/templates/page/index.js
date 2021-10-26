import React from "react"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../../components/"

const Page = ({ pageContext }) => {
  const { page } = pageContext
  const featuredImage = getImage(page.featuredImage)
  return (
    <Layout>
      <Seo title={page.title} />
      {page.featuredImage && (
        <GatsbyImage image={featuredImage} alt={page.title} />
      )}
      <h1>{page.title}</h1>
      {page.content && <div>{parse(page.content)}</div>}
    </Layout>
  )
}

export default Page
