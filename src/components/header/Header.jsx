import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*================ Change Background Header ================*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //when the scroll is higher than 200 viewport height,
    // add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*================ Toggle Menu ================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const homeNav = document.querySelector("#home");
  const aboutNav = document.querySelector("#about");
  const skillsNav = document.querySelector("#skills");
  const servicesNav = document.querySelector("#services");
  const portfolioNav = document.querySelector("#portfolio");
  const contactNav = document.querySelector("#contact");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Wildan
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav(homeNav)}
                className={
                  activeNav === homeNav ? "nav__link active__link" : "nav__link"
                }>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav(aboutNav)}
                className={
                  activeNav === aboutNav
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav(skillsNav)}
                className={
                  activeNav === skillsNav
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav(servicesNav)}
                className={
                  activeNav === servicesNav
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav(portfolioNav)}
                className={
                  activeNav === portfolioNav
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav(contactNav)}
                className={
                  activeNav === contactNav
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
