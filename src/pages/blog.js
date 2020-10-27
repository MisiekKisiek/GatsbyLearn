import React from "react";
import { graphql, useStaticQuery } from "gatsby";

//Components 
import Layout from '../components/layout';
import Post from '../components/postElement'

const Blog = () => {
  const data = useStaticQuery(graphql`
     {
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
     }
  `)

  const renderPosts = () => {
    const {edges} = data.allMarkdownRemark;
    const posts = edges.map(post => {
        const {title, date} = post.node.frontmatter;
        console.log(title,date, post)
        return(<Post title={title} date={date} key={title}/>)
    })
    return posts
  }
  return (
    <Layout>
      {renderPosts()}
    </Layout>
  )
}

export default Blog
