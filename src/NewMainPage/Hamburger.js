import React from "react";
import "./Hamburger.css";

// TODO: Update project names and links (according to GetRoutes.js links)

export default function Hamburger() {
  return (
    <>
      <input id="hamburger-input" type="checkbox" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav id="sidebar-menu">
          <div className="xout">
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <h3>Menu</h3>
          <div className="menu-line"></div>
          <ul className="input-container">
            <a href="/">
              <input type="button" className="menu-label2" value="Home" />
            </a>
            <a href="/resume">
              <input type="button" className="menu-label2" value="Resume" />
            </a>
            <a href="/truss-bust">
              <input
                type="button"
                className="menu-label2"
                value="Truss Bust"
              />
            </a>
            <a href="/flicker">
              <input
                type="button"
                className="menu-label2"
                value="Flicker"
              />
            </a>
            <a href="/Shrinkage-calculator">
              <input
                type="button"
                className="menu-label2"
                value="Shrinkage Calculator"
              />
            </a>
            <a href="/LegoLab">
              <input
                type="button"
                className="menu-label2"
                value="Lego Lab"
              />
            </a>
            <a href="/FBookshelf">
              <input
                type="button"
                className="menu-label2"
                value="Floating Bookshelf"
              />
            </a>
            <a href="/Coaster">
              <input
                type="button"
                className="menu-label2"
                value="3D Printer Coaster"
              />
            </a>
            <a href="/AlumRing">
              <input
              type="button"
              className="menu-label2"
              value="Aluminum Ring"
              />
            </a>
            <a href="/BonsaiTree">
              <input
              type="button"
              className="menu-label2"
              value="Bonsai Tree"
              />
            </a>
          </ul>
        </nav>
      </label>

      <div className="overlay"></div>
    </>
  );
}
