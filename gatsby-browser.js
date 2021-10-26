import fetch from "isomorphic-fetch"
import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    fetch,
    uri: "http://wp.loc/graphql",
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
