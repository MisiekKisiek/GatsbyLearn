import React from 'react';
import {Link} from 'gatsby';

//Styles
import postStyles from '../styles/postelement.module.scss';

const PostElement = ({title, date, slug}) => {
  return ( 
    <div className={postStyles.container}>
      <h2>{title}</h2>
      <Link to={slug}>{slug}</Link>
      <p>{date}</p>
    </div>
   );
}
 
export default PostElement;