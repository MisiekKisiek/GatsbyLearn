import React from 'react';
import {Helmet} from 'react-helmet';
import { graphql, useStaticQuery, Link } from "gatsby";

const Head = ({titleAd}) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    const {title} = data.site.siteMetadata;
    return ( 
        <Helmet title={`${title}  ${titleAd?"| "+titleAd:""}`}/>
     );
}
 
export default Head;