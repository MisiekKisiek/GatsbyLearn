import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

//styles
import headerStyles from '../styles/header.module.scss';


const Header = () => {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return ( 
        <>
            <div className={headerStyles.header}>{data.site.siteMetadata.title}</div>
        </>
     );
}
 
export default Header;