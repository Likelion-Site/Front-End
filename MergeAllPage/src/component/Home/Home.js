import "./Home.css";
import logo from "../joinFormPage/img/logoimg.png";
import homeUnderImg from "./smulion.png";
import React from "react";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div class="contentBox">
        <div id="logoBox">
          <img src={logo} className="logoImg" alt="React" />
        </div>

        {/* <!-- Proudly created with www.csswarp.com --> */}

        <div class="homeText">
          <div class="warp">
            <span>
              <span class="warp__0">H</span>
              <span class="warp__1">A</span>
              <span class="warp__2">C</span>
              <span class="warp__3">K</span>
            </span>
          </div>

          <div class="warp2">
            <span id="warp-label" class="warp__placeholder"></span>
            <span>
              <span class="warp__00">Y</span>
              <span class="warp__01">O</span>
              <span class="warp__02">U</span>
              <span class="warp__03">R</span>
            </span>
          </div>

          <div class="warp3">
            <span id="warp-label" class="warp__placeholder"></span>
            <span>
              <span class="warp__0">L</span>
              <span class="warp__1">I</span>
              <span class="warp__2">F</span>
              <span class="warp__3">E</span>
            </span>
          </div>

          <img src={homeUnderImg} className="homeUnderImg" alt="React" />
        </div>
      </div>
    </>
  );
}