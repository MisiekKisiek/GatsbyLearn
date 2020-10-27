import React from 'react';
import { graphql, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

//Components
import Layout from '../components/layout';

//Styles
import postElementStyles from '../styles/postelement.module.scss';

export const query = graphql`
  query (
    $slug: String
  ){
    markdownRemark (
      fields: {
        slug:{
          eq: $slug
        }
      }
    ) {
      frontmatter{
        title
        date
      }
      html
    }
  }
`;

const Blog = (props) => {
  return ( 
      <Layout>
        <h1 className={postElementStyles.container}>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        <AniLink paintDrip bg="coral" duration={0.8} to="/blog">go back</AniLink>
      </Layout>
   );
}
 
export default Blog;