import React from "react";
import{Link} from 'react-scroll'
import WhistlePigWhiskeyLogo from '../assets/WhistlePig-Whiskey.svg'; 


function Navbar(){
    return(
        <div>
            <nav>
                <Link to="main" className="logo">
                <img src={WhistlePigWhiskeyLogo} alt="WhistlePig Whiskey Logo" class="center"/>
                </Link>
                <label>
                    <span></span>
                </label>
                <ul>
                    <li><Link>WhistlePig</Link></li>
                    <li><Link>Story</Link></li>
                    <li><Link>Ingredients</Link></li>
                    <li><Link>Experiencing</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar