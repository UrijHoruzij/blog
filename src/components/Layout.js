import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { HeaderNav, Header, Footer, Sidebar, Main, Container } from "./"
import styled from "styled-components"
import "normalize.css"
import "@wordpress/block-library/build-style/style.css"
import "./layout.css"

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "main sidebar";
  grid-template-rows: 1fr;
  grid-template-columns: 8fr 4fr;
  grid-gap: 16px;
  margin-top: 24px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
        }
      }
      site {
        siteMetadata {
          author
          descriptionAuthor
        }
      }
      wpgraphql {
        menuItems {
          nodes {
            path
            label
            id
          }
        }
        posts(last: 3) {
          nodes {
            id
            slug
            title
            featuredImage {
              node {
                sourceUrl
                imageFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, height: 255)
                  }
                }
              }
            }
          }
        }
        mediaItems(last: 9) {
          nodes {
            imageFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, height: 255)
              }
            }
            sourceUrl
            altText
            id
          }
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <HeaderNav data={data} />
      </Container>
      <Header data={data} />
      <Container>
        <Wrapper>
          <Main>{children}</Main>
          <Sidebar data={data} />
        </Wrapper>
      </Container>
      <Footer siteTitle={data.site.siteMetadata.author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
