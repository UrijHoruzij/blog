import React from "react"
import { config } from "./"
import styled from "styled-components"

const ContainerBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  @media ${config.breakpoints.xs} {
    max-width: 100%;
  }
  @media ${config.breakpoints.sm} {
    ${config.container.sm}
  }
  @media ${config.breakpoints.md} {
    ${config.container.md}
  }
  @media ${config.breakpoints.lg} {
    ${config.container.lg}
  }
  @media ${config.breakpoints.xl} {
    ${config.container.xl}
  }
  @media ${config.breakpoints.xxl} {
    ${config.container.xxl}
  } ;
`

const Container = ({ children }) => {
  return <ContainerBlock>{children}</ContainerBlock>
}

export default Container
