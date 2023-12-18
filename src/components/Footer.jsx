import React from "react";
import WhistlePigWhiskeyLogo from '../assets/WhistlePig-Whiskey.svg'; 

function Footer(props) {
  return (
    <div className="bg-gray-900 mt-auto">
      <div >
        <img src={WhistlePigWhiskeyLogo} alt="WhistlePig Whiskey Logo" className="mx-auto" />
      </div>
      <p>2023</p>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
