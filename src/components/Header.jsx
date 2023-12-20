import {Link} from "react-router-dom"
import WhistlePigWhiskeyLogo from '../assets/WhistlePig-Whiskey.svg'; 
import Navbar from "./Navbar";

function Header(props){
   return (
    <header className="bg-gray-900">
      <div>
        <Navbar/>
      </div>
    </header>
   );
}

export default Header;