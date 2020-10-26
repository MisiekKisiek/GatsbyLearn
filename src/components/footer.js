import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Styles
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      {data.site.siteMetadata.author}
    </footer>
  )
}

export default Footer
