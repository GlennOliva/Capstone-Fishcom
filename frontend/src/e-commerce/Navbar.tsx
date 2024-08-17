import '../css/styles.css'; // Import your CSS for styling
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  useEffect(() => {
    // Function to initialize Glide.js
    

    // Handle hamburger menu
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement | null;
    const navList = document.querySelector(".nav-list") as HTMLUListElement | null;

    if (hamburger && navList) {
      const handleHamburgerClick = () => {
        navList.classList.toggle("open");
      };
      hamburger.addEventListener("click", handleHamburgerClick);

      // Cleanup
      return () => {
        hamburger.removeEventListener("click", handleHamburgerClick);
      };
    }

    // Handle popup
    const popup = document.querySelector(".popup") as HTMLDivElement | null;
    const closePopup = document.querySelector(".popup-close") as HTMLButtonElement | null;

    if (popup && closePopup) {
      const handleClosePopupClick = () => {
        popup.classList.add("hide-popup");
      };

      closePopup.addEventListener("click", handleClosePopupClick);

      window.addEventListener("load", () => {
        setTimeout(() => {
          popup.classList.remove("hide-popup");
        }, 1000);
      });

      // Cleanup
      return () => {
        closePopup.removeEventListener("click", handleClosePopupClick);
      };
    }

  }, []);

  return (
    <header className="header" id="header">
      <div className="navigation">
        <div className="nav-center container d-flex">
          <a href="/" className="logo"><h1>FishCommerce</h1></a>

          <ul className="nav-list d-flex">
            <li className="nav-item">
              <a href="/ecommerce" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/product" className="nav-link">Shop</a>
            </li>
            <li className="nav-item">
  <Link to="/" className="nav-link">Social</Link>
</li>
          </ul>

          <div className="icons d-flex">
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <Link to="/cart" className="icon">
  <i className="bx bx-cart"></i>
  <span className="d-flex">0</span>
</Link>
            <div className="icon">
              <h2 style={{ fontSize: '14px' }}>Welcome, Glenn</h2>
            </div>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>

   
    </header>
  );
}

export default Navbar;
