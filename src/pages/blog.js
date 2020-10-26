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
            excerpt
          }
        }
      }
     }
  `)

  const renderPosts = () => {
    console.log(data)
    const {edges} = data.allMarkdownRemark;
    console.log(edges)
    const posts = edges.map(post => {
        const {title, date} = post.node.frontmatter;
        console.log(title,date, post)
        return(<Post title={title} date={date} key={title}/>)
    })
    console.log(posts)
    return posts
  }
  console.log(renderPosts())
  return (
    <>
      {renderPosts()}
    </>
  )
}

export default Blog
