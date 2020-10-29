import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout'

const ErrorPage = () => {
    return ( <>
        <h1>Nie ma takiej stronki brachu!</h1>
        <p><Link to="/">Header home</Link></p>
    </> );
}
 
export default ErrorPage;