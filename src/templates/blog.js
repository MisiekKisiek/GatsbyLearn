import React from 'react';
import { graphql, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

//Layouts
import Layout from '../components/layout';

//Components
import Head from '../components/head';

//Styles
import postElementStyles from '../styles/postelement.module.scss';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do Y")
      body{
        json
      }
    }
  }
`;

const Blog = (props) => {
  const {title, publishedDate, body} = props.data.contentfulBlogPost;

  const options = {
    renderNode: {
      // "embedded-asset-block": (node) => {
      //   const alt = node.data.target.fields.title('en-US');
      //   const url = node.data.target.fields.fields('en-US').url;
      //   return <img url={url} alt={alt}/>
      // }
    }
  }
  return ( 
      <Layout>]
        <Head titleAd={title}/>
        <div className={postElementStyles.container}>
          <h1>{title}</h1>
          <p>{publishedDate}</p>
          {documentToReactComponents(body.json, options)}
          <AniLink  bg="coral" duration={0.8} to="/blog">go backk</AniLink>
        </div>
      </Layout>
   );
}
 
export default Blog;