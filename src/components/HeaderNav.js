import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { config } from "./"

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  @media ${config.breakpoints.xs} {
    margin: auto 8px;
  }
  @media ${config.breakpoints.sm} {
    margin: 0;
  }
`
const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 58px;
`
const MobileWrapper = styled.div`
  display: none;
  @media ${config.breakpoints.xs} {
    display: block;
  }
  @media ${config.breakpoints.lg} {
    display: none;
  }
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
  @media ${config.breakpoints.xs} {
    display: none;
  }
  @media ${config.breakpoints.lg} {
    display: flex;
  }
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
  position: relative;
  @media ${config.breakpoints.xs} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 24px;
  }
  @media ${config.breakpoints.lg} {
    display: none;
  }
`
const HamburgerLine = styled.div`
  width: 32px;
  height: 2px;
  background-color: ${config.black};
  &:nth-child(1) {
    ${props =>
      props.open
        ? css`
            position: absolute;
            transform: rotate(45deg) translateY(16px);
          `
        : css``};
  }
  &:nth-child(2) {
    display: ${props => (props.open ? "none" : "block")};
  }
  &:nth-child(3) {
    ${props =>
      props.open
        ? css`
            position: absolute;
            transform: rotate(-45deg) translateX(-16px);
          `
        : css``};
  }
`

const MobileMenu = styled.nav`
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
`
const MobileMenuItem = styled.li`
  list-style: none;
  padding-top: 12px;
  padding-bottom: 12px;
`
const MobileMenuLink = styled(Link)`
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
const HeaderNav = ({ data }) => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <HeaderWrapper>
      <DesktopWrapper>
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
        <Hamburger open={open} onClick={() => setOpen(!open)}>
          <HamburgerLine open={open} />
          <HamburgerLine open={open} />
          <HamburgerLine open={open} />
        </Hamburger>
      </DesktopWrapper>
      <MobileWrapper>
        <MobileMenu open={open}>
          {data.wpgraphql.menuItems.nodes.map(item => {
            return (
              <MobileMenuItem key={item.id}>
                <MobileMenuLink onClick={() => close()} to={item.path}>
                  {item.label}
                </MobileMenuLink>
              </MobileMenuItem>
            )
          })}
        </MobileMenu>
      </MobileWrapper>
    </HeaderWrapper>
  )
}

export default HeaderNav
