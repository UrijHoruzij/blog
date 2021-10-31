import * as React from "react"
import styled from "styled-components"
import { Layout, Seo, config } from "../components/"

const Title = styled.h1`
  font-family: ${config.fontSerif};
  font-size: 24px;
  font-weight: 700;
  color: ${config.black};
  line-height: 32px;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Страница не найдена" />
    <Title>404: Страница не найдена</Title>
  </Layout>
)

export default NotFoundPage
