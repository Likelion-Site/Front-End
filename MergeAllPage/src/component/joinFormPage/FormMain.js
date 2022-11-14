import img from "./img/logoimg.png";
import React from 'react';
import './css/FormMain.css';
import {Link,Route } from "react-router-dom";
import Click from './Click';
import Header from '../Header/Header.js';


function FormMain(){ 

    return(
       
        <div className="FormMain">
            <Header/>
            <img className="backgroundimg" src={img} alt="logo"/>
            <div className="font">
                <div className='hack'>
                    <span>H</span><span>A</span><span className='blur'>C</span><span>K</span>
                </div>
                <div className='your'>
                    <span>Y</span><span className='blur'>O</span><span>U</span><span>R</span>
                </div>
                <div className='imagenative'>
                    <span>I</span><span className='blur'>M</span><span>A</span><span>G</span><span>E</span><span>N</span><span>A</span><span>T</span><span>I</span><span>V</span><span>E</span>
                </div>
                <div className='life'>
                    <span>L</span><span>I</span><span>F</span><span className='blur'>E</span>
                </div>
                <div className="date">
                    <p>2023.00.00~2023.00.00</p>
                </div>
                <div className="form">
                     <Click />
                </div>
                
            </div>
               
     </div>

    );

};

export default FormMain;