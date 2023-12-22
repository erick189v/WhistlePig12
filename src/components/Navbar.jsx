import React from "react";
import{Link} from 'react-scroll'
import WhistlePigWhiskeyLogo from '../assets/WhistlePig-Whiskey.svg'; 


function Navbar(){
    return(
        <div>
            <nav>
                <Link to="main" className="logo">
                <img src={WhistlePigWhiskeyLogo} alt="WhistlePig Whiskey Logo" className="center"/>
                </Link>
                <label>
                    <span></span>
                </label>
                <ul className="text-white">
                    <li><Link to="whistlePig" spy={true} smooth={true} offset={50} duration={500}>WhistlePig</Link></li>
                    <li><Link to="story" spy={true} smooth={true} offset={50} duration={500}>Story</Link></li>
                    <li><Link to="ingredients" spy={true} smooth={true} offset={50} duration={500}>Ingredients</Link></li>
                    <li><Link to="experiencing" spy={true} smooth={true} offset={50} duration={500}>Experiencing</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar