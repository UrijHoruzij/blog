import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main`
  grid-area: main;
`

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

export default Main
