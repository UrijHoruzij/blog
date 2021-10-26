import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { config } from "./"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`
const HeaderLogo = styled(Link)`
  text-decoration: none;
  font-family: ${config.fontLogo};
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  color: ${config.black};
`
const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const MenuItem = styled.li`
  list-style: none;
  padding-left: 36px;
`
const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: ${config.fontSans};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${config.black};
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    color: ${config.black};
  }
`
const Hamburger = styled.div`
  display: none;
`

const HeaderNav = ({ data }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo to="/">{data.site.siteMetadata.author}</HeaderLogo>
      <HeaderMenu>
        {data.wpgraphql.menuItems.nodes.map(item => {
          return (
            <MenuItem key={item.id}>
              <MenuLink to={item.path}>{item.label}</MenuLink>
            </MenuItem>
          )
        })}
      </HeaderMenu>
      <Hamburger></Hamburger>
    </HeaderWrapper>
  )
}

export default HeaderNav
