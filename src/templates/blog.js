import React from 'react';
import { graphql, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

//Components
import Layout from '../components/layout';

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
  const {title, publishedDate, body} = props.data.contentfulBlogPost
  console.log('body',body.json)
  return ( 
      <Layout>
        <div className={postElementStyles.container}>
          <h1>{title}</h1>
          <p>{publishedDate}</p>
          {documentToReactComponents(body.json)}
          {/* <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
          <AniLink  bg="coral" duration={0.8} to="/blog">go backk</AniLink>
        </div>
      </Layout>
   );
}
 
export default Blog;