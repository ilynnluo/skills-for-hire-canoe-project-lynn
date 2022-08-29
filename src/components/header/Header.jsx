import React from "react";
import "./Header.css";
import $ from "jquery";

export const Header = () => {
  const handleMenu = () => {
    $("button").on('click', function () {
      $("#sideMenu").toggle();
    })
  }
  return (
    <>
      <div className="topNav">
        <button onClick={handleMenu}>
          <img className="navHamburger"
            src="https://raw.githubusercontent.com/Zulinov/skillsProjects/main/hamburger.png"
            alt="navHamburger" />
        </button>
        <h1>Halifax Canoe and Kayak</h1>
        <div className="navHamburger">
          <img src="https://raw.githubusercontent.com/Zulinov/skillsProjects/main/paddle-white.png"
            alt="Logo" />
        </div>
      </div>
      <nav className="sideMenu" id="sideMenu" >
        <ul>
          <li><a className="sideMenuLink" href="#">Home</a></li>
          <li><a className="sideMenuLink" href="#">Book Trip</a></li>
          <li><a className="sideMenuLink" href="#">Admin Login</a></li>
        </ul>
      </nav>
    </>

  )
}