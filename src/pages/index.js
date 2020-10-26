import React from "react";
import {Link} from 'gatsby';

//Components 
import Layout from '../components/layout';

//Styles
import indexStyles from '../styles/index.module.scss';

const Home = () => {
  return ( <>
    <Layout>
      <div className={indexStyles.index}>Hello world!</div>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </Layout>
  </> );
}
 
export default Home;