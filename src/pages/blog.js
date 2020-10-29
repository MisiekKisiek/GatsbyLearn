import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

//Components 
import Layout from '../components/layout';
import Post from '../components/postElement'
import Head from '../components/head';

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost(
      sort:{
        fields: publishedDate,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString: "Do MMMM Y")
        }
      }
    }
  }
  `)

  const renderPosts = () => {
    const {edges} = data.allContentfulBlogPost;
    console.log(data)
    const posts = edges.map(post => {
        const {title, publishedDate, slug} = post.node;
        return(<Post title={title} date={publishedDate} key={title} slug={slug}/>)
    })
    return posts
  }
  return (
    <Layout>
      <Head titleAd="blog"/>
      {renderPosts()}
      <Link to="/">Go back</Link>
    </Layout>
  )
}

export default Blog
