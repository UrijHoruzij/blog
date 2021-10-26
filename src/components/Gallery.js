import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GalleryWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  margin-top: 24px;
`
const GalleryItem = styled(GatsbyImage)``
const Gallery = ({ data }) => {
  return (
    <GalleryWrapper>
      {data.wpgraphql.mediaItems.nodes.map(image => {
        let item = getImage(image.imageFile)
        return <GalleryItem key={item.id} image={item} alt={item.altText} />
      })}
    </GalleryWrapper>
  )
}
export default Gallery
