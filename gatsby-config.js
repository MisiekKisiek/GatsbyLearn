module.exports = {
  siteMetadata: {
    title: "Kurwisko",
    author: "misiekkisiek",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },    
    },
    "gatsby-transformer-remark",
  ],
}
