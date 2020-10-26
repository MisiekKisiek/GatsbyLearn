import React from 'react'

const PostElement = ({title,date}) => {
  return ( 
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
   );
}
 
export default PostElement;