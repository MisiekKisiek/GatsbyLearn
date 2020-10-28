module.exports = {
  siteMetadata: {
    title: "Kurwisko",
    author: "misiekkisiek",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },    
    },
    "gatsby-plugin-sharp",
    {
      resolve:"gatsby-transformer-remark",
      options:{
        plugins:[
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options:{
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
  ],
}
