import React from 'react'
import './HeroSection.css'
import '../App.css'
import {Button} from './Button'
import Wave from './videos/bg.mp4'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
    return (
        <div className='hero-container'>
        <video src={ Wave } autoPlay muted loop />

        <h1>Bulacan State University</h1>
        <p>Welcome to College of Engineering</p>

        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    INSIDE BSU
            </Button>

            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        WATCH THIS  <FontAwesomeIcon icon={faPlay} className="icon"/>
            </Button>
        </div>
        </div>
    );
}

export default HeroSection;
