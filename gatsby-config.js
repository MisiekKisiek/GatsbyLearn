module.exports = {
  siteMetadata: {
    title: "Kurwisko",
    author: "misiekkisiek",
  },
  plugins: [
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
