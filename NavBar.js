import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>News feed</li>
        <li>Find lawyers</li>
        <li className="active">Home</li>
        <li>Connections</li>
        <li>Chats</li>
      </ul>
      <div className="nav-right">
        <div className="user-details">
          <span className="user-name">John Doe</span>
          <img
            src="path-to-your-image.jpg"
            alt="User"
            className="user-avatar"
          />
        </div>
        <div className="settings" onClick={toggleDropdown}>
          <span>Settings</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Account Settings</li>
              <li>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
