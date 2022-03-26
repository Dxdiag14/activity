import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {

    if (window.innerWidth <= 960) {
    setButton(false);
    } else {
    setButton(true);
    }
    };

    useEffect(() => {
    showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>

    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
    College of Engineering <i className='fas fa-user' />
    </Link>

    <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div> 

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    
    <li className='nav-item'>
    <Link to='/Civil' className='nav-links' onClick={closeMobileMenu}>
    Civil Engineering
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/Computer' className='nav-links' onClick={closeMobileMenu}>
    Computer Engineering
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/Electronics' className='nav-links' onClick={closeMobileMenu}>
    Electronics Engineering
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/Industrial' className='nav-links' onClick={closeMobileMenu}>
    Industrial Engineering
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
    SignUp
    </Link>
    </li>
    </ul>
    
    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

    </div>
    </nav>
    </>
    );
    }

    export default Navbar;
