import{
    HeaderDiv,
    MenuDiv,
    HeaderLine,
    Menu,
    NavLinkTo,

} from './styledComponent';
import './App.css';
import React from 'react';


// import { useState } from 'react';

function MenuBar(){
   
    return(
        <>
        <HeaderDiv>
            <img className="logo" alt="logo_image" src="img/Logo.png"></img>
            
        <MenuDiv>
            <img className="title" alt="title_image" src="img/headertitle.png"></img>
        <HeaderLine></HeaderLine>        
        <Menu>
        <NavLinkTo to ="/likelion">
            멋쟁이사자처럼
        </NavLinkTo>
        <NavLinkTo to ="/plan">
            연간 계획
        </NavLinkTo>
        <NavLinkTo to ="/curriculum">
            커리큘럼
        </NavLinkTo>
        </Menu>
        </MenuDiv>
        </HeaderDiv>
        </>
    );
};
export default MenuBar