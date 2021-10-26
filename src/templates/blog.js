import * as React from "react"
import { Layout, Seo, Cards, Pagination } from "../components/"

const IndexPage = ({ pageContext }) => {
  const { posts, numPages, currentPage } = pageContext
  return (
    <>
      <Layout>
        <Seo title="Главная" />
        <Cards posts={posts} />
        <Pagination numPages={numPages} currentPage={currentPage} />
      </Layout>
    </>
  )
}

export default IndexPage
