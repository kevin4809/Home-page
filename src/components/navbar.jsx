import React, { useState } from "react";
import "../css/navbar.css";
import "../css/body.css";
import Media from "react-media";

//Assets
import logo from "../images/logo.svg";
import x from "../images/icon-close-menu.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import planing from "../images/icon-planning.svg";
import calendar from "../images/icon-calendar.svg";
import list from "../images/icon-todo.svg";
import bell from "../images/icon-reminders.svg";
import hamburger from "../images/icon-menu.svg";
import bodyImg from "../images/image-hero-desktop.png";
import bodyImgResponsive from "../images/image-hero-mobile.png";
import markOne from "../images/client-audiophile.svg";
import markTwo from "../images/client-databiz.svg";
import markThree from "../images/client-maker.svg";
import markFour from "../images/client-meet.svg";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const [isActive2, setisActive2] = useState(false);

  const [isMenuActive, setIsMenuActive] = useState(true);

  const isClicked = (droppdown) => {
    if (droppdown === 2) {
      setIsMenuActive(!isMenuActive);
      console.log(droppdown);
    } else if (droppdown === "Droppdown-one") {
      setisActive(!isActive);
    } else if ("Droppdown-two") {
      setisActive2(!isActive2);
    }
  };

  return (
    <div className="navbar">
      <div className="content-navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="x" onClick={() => isClicked(2)}>
          {isMenuActive ? (
            <img src={hamburger} alt="" />
          ) : (
            <img src={x} alt="closeMenu" />
          )}
        </div>
        <div
          className={`info-navbar ${
            isMenuActive ? "navbar-responsive-active" : ""
          }`}
        >
          <ul className="ul-content">
            <li className="father-menu ">
              <a href="/#" onClick={() => isClicked("Droppdown-one")}>
                Features <img src={arrowDown} alt="arrowDown" />
              </a>

              <ul
                id="l1"
                className={`deep-list ${isActive ? "deep-list-active" : ""}`}
              >
                <li className="items">
                  <a href="/#">
                    <img src={list} alt="list" /> Todo List
                  </a>
                </li>
                <li className="items">
                  <a href="/#">
                    <img src={calendar} alt="Calendar" /> Calendar
                  </a>
                </li>
                <li className="items">
                  <a href="/#">
                    <img src={bell} alt="bell" /> Reminders
                  </a>
                </li>
                <li className="items">
                  <a href="/#">
                    <img src={planing} alt="plaing" /> Planning
                  </a>
                </li>
              </ul>
            </li>

            <li className="father-menu">
              <a href="#/" onClick={() => isClicked("Droppdown-two")}>
                Company <img src={arrowDown} alt="arrowDown" />
              </a>
              <ul
                id="l2"
                className={`deep-list ${isActive2 ? "deep-list-active" : ""}`}
              >
                <li className="items">
                  <a href="/#">History</a>
                </li>

                <li className="items">
                  <a href="/#">Our Team</a>
                </li>

                <li className="items">
                  <a href="/#">Blog</a>
                </li>
              </ul>
            </li>

            <li className="father-menu">
              <a href="/#">Careers</a>
            </li>

            <li className="father-menu">
              <a href="/#">About</a>
            </li>
          </ul>

          <div className="buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>

      <div className="content-body">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="img-one">
              <Media query="(max-width: 760px)">
                {(matches) => {
                  return matches ? (
                    <img className="img-fluid" src={bodyImgResponsive} alt="" />
                  ) : (
                    <img className="img-fluid" src={bodyImg} alt="" />
                  );
                }}
              </Media>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 info">
            <Media query="(max-width: 760px)">
              {(matches) => {
                return matches ? (
                  <h1 className="title">Make remote work</h1>
                ) : (
                  <h1 className="title">
                    Make <br /> remote work
                  </h1>
                );
              }}
            </Media>

            <div className="contet-text">
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <div className="button-body">
              <button> Learn more</button>
            </div>

            <div className="row icons">
              <div className="col ">
                <img className="img-fluid" src={markTwo} alt="" />
              </div>
              <div className="col">
                <img className="img-fluid" src={markOne} alt="" />
              </div>
              <div className="col">
                <img className="img-fluid" src={markFour} alt="" />
              </div>
              <div className="col">
                <img className="img-fluid" src={markThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
