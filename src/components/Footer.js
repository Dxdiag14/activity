import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
return (
<div className='footer-container'>

    <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
    Be a BulSUan Engineer, SOAR BulSU! 
    </p>
    <p className='footer-subscription-text'>
    get in touch with us.
    </p>
    <div className='input-areas'>
    <form>
    <input
    className='footer-input'
    name='email'
    type='email'
    placeholder='Your Email'
    />
    <Button buttonStyle='btn--outline'>Subscribe</Button>
    </form>
    </div>
    </section>

    <div class='footer-links'>
    <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
        <h2>About Us</h2>
        <Link to='/sign-up'>Main Campus</Link>
        <Link to='/'>Bustos Campus</Link>
        <Link to='/'>Sarmiento Campus</Link>
        <Link to='/'>Meneses Campus</Link>
        <Link to='/'>Program Offering</Link>
    </div>

    <div class='footer-link-items'>
        <h2>Contact Us</h2>
        <Link to='/'>Contact Details</Link>
        <Link to='/'>Directions</Link>
        <Link to='/'>Student Government</Link>
        <Link to='/'>Local Government Unit</Link>
    </div>
    </div>

    <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
        <h2>Visit our Campuses</h2>
        <Link to='/'>Malolos, Bulacan</Link>
        <Link to='/'>Bulakan, Bulacan</Link>
        <Link to='/'>San Jose Del Monte City</Link>
        <Link to='/'>San Rafael, Bulacan</Link>
    </div>

    <div class='footer-link-items'>
        <h2>Social Media</h2>
        <Link to='/'>Instagram</Link>
        <Link to='/'>Facebook</Link>
        <Link to='/'>Youtube</Link>
        <Link to='/'>Twitter</Link>
    </div>

    </div>
    </div>

    <section class='social-media'>
    <div class='social-media-wrap'>
    <div class='footer-logo'>
    <Link to='/' className='social-logo'>
    BSU
    <i class="fa fa-cog fa-spin fa-1x fa-fw"></i>
    <span class="sr-only">Loading...</span>
    </Link>
    </div>
    <small class='website-rights'>JBLazaro © 2022</small>
    <div class='social-icons'>
    <Link
    class='social-icon-link facebook'
    to='/'
    target='_blank'
    aria-label='Facebook'
    >
    <i class='fab fa-facebook-f' />
    </Link>
    <Link
    class='social-icon-link instagram'
    to='/'
    target='_blank'
    aria-label='Instagram'
    >
    <i class='fab fa-instagram' />
    </Link>
    <Link
    class='social-icon-link youtube'
    to='/'
    target='_blank'
    aria-label='Youtube'
    >
    <i class='fab fa-youtube' />
    </Link>
    <Link
    class='social-icon-link twitter'
    to='/'
    target='_blank'
    aria-label='Twitter'
    >
    <i class='fab fa-twitter' />
    </Link>
    <Link
    class='social-icon-link twitter'
    to='/'
    target='_blank'
    aria-label='LinkedIn'
    >
    <i class='fab fa-linkedin' />
    </Link>
    </div>
    </div>
    </section>
    </div>
    );
    }


export default Footer;