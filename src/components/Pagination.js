import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { config } from "./"
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
const CurrentPage = styled.div`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background-color: ${config.grey};
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 24px;
  border-radius: 100%;
  border: 1px solid ${config.black};
  display: flex;
  justify-content: center;
  align-items: center;
`
const PaginationLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  width: 32px;
  height: 32px;
  background-color: ${config.grey};
  margin-right: 8px;
  font-family: ${config.fontSerif};
  font-size: 18px;
  font-weight: 400;
  color: ${config.black};
  line-height: 24px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${config.black};
  }
`

const range = (from, to, step = 1) => {
  let i = from
  const range = []
  while (i <= to) {
    range.push(i)
    i += step
  }
  return range
}
const Pagination = ({ numPages, currentPage }) => {
  if (numPages <= 1) return null
  let items = range(1, 10)
  let startIndex = currentPage - 2 - 1
  let endIndex = currentPage + 2
  if (currentPage - 2 <= 1) {
    startIndex = 0
  }
  if (currentPage + 2 >= numPages) {
    endIndex = numPages
  }

  let nav = items.slice(startIndex, endIndex)
  return (
    <PaginationWrapper>
      {nav.map(i => {
        if (i === currentPage) {
          return <CurrentPage key={`pagination-number${i}`}>{i}</CurrentPage>
        }
        if (i === 1) {
          return (
            <PaginationLink key={`pagination-number${i}`} to={`/`}>
              {i}
            </PaginationLink>
          )
        }
        return (
          <PaginationLink key={`pagination-number${i}`} to={`/page/${i}`}>
            {i}
          </PaginationLink>
        )
      })}
    </PaginationWrapper>
  )
}

export default Pagination
