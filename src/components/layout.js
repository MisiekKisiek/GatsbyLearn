import React from 'react'

//Components
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
    return ( <>
        <Header/>
        {children}
        <Footer/>
    </> );
}
 
export default Layout;