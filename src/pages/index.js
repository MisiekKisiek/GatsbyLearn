import React from "react";
import {Link} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"

//Components 
import Layout from '../components/layout';
import Head from '../components/head';

//Styles
import indexStyles from '../styles/index.module.scss';

const Home = () => {
  return ( <>
    <Layout>
      <Head titleAd="kaa"/>
      <div className={indexStyles.index}>Hello world!</div>
      <AniLink fade to="/contact">Contact</AniLink>
      <AniLink fade to="/blog">Blog</AniLink>
    </Layout>
  </> );
}
 
export default Home;