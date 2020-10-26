import React,{useEffect} from 'react';
import {Link} from 'gatsby';

//Styles
import contactStyles from '../styles/contact.module.scss';

//Layouts
import HeaderLayout from '../components/layout';

const Contact = () => {

    useEffect(() => {
        console.log('contact')
    }, [])

    return ( 
    <HeaderLayout>
        <h1 className={contactStyles.link}>Contact</h1>
        <p className={contactStyles.paragraph}>You can find me on 
            <a href="https://facebook.com" className={contactStyles.link}>Facebook</a>
        </p>
        <Link to="/">Go back to Main page</Link>
    </HeaderLayout> );
}

 
export default Contact;