module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: ``,
    author: `Елена Хоружая`,
    descriptionAuthor: "учитель физики, старший учитель",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `elena-horuzaya`,
        short_name: `elena-horuzaya`,
        start_url: `/`,
        background_color: `#29db7c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "WPGraphQL",
    //     fieldName: "wpgraphql",
    //     url: "http://wp.loc/graphql",
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "http://helen.insomnia247.nl/graphql",
      },
    },
  ],
}
