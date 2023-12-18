import {Link} from "react-router-dom"
import WhistlePigWhiskeyLogo from '../assets/WhistlePig-Whiskey.svg'; 

function Header(props){
   return (
    <header className="bg-gray-900">
        <img src={WhistlePigWhiskeyLogo} alt="WhistlePig Whiskey Logo" class="center"/>
        {/* <h1 className="centered">WhistlePig</h1> */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="px-2 sm:px-6 lg:px-8">WhistlePig</div>
            <div className="px-2 sm:px-6 lg:px-8">Story</div>
            <div className="px-2 sm:px-6 lg:px-8">Ingredients</div>
            <div className="px-2 sm:px-6 lg:px-8">Experiencing</div>
        </nav>
    </header>
   );
}

export default Header;