import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

export const MenuDiv= styled.div`
    text-align: center;
    margin-top: 2%
`
export const HeaderLine= styled.div`
    border-bottom: solid 3px rgba(217, 217, 217, 1);
    margin-top: 3%
`

export const HeaderDiv = styled.div`
    padding: 10px;
    
`;
export const MainDiv = styled.div`
    text-align: center;
    margin-top: 5%
    
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-around
`
export const NavLinkTo = styled(NavLink)`
    text-decoration: none;
    font-size:24px;
    margin-top: 2%;
    color: white;
    width: 180px;
    &.active{
        color: orange;
        text-underline-position: under;
        text-decoration: underline white solid 4px;
    }
`



export const TitleBig = styled.div`
    margin: auto;
    font-size: 20px;
    text-align: center;
    color: white;
    background-color: rgba(230, 120, 0, 1);
    border-radius: 15px;
    padding : 10px;
    width: 200px;

`;

export const TitleSmall = styled.div`
    text-align: center;    
    font-size: 25px;
    color: white;
`;

export const MainText = styled.p`
    text-align: center;
    font-size: 15px;
    color: white;
`
export const ImgBox = styled.div`
    background-color: white;
    border-radius: 20px;
    margin-top: 3%;
    display: inline-block;
    width: 20%;
    margin-bottom: 2%;
     
`
export const ImgBox1 = styled.div`
    background-color: white;
    border-radius: 20px;
    margin-top: 5%;
    display: inline-block;
    width: 16%;
    margin-bottom: 5%;
    
`
export const ImgBox2 = styled.div`
    display:flex;
    justify-content: space-evenly
  
    
`

export const ImgDiv = styled.div`
    padding:10px;
    display:flex;
    flex-direction: row;
    justify-content: center;
`

export const Imgs = styled.img` 
   width: 60px;
   height: 70px;
   margin-right:2% 

`
export const TitleImg = styled.p`
    color: black;
    text-align: center;
    font-size: 17px;
    font-weight: 900;
    margin: 10px;
    
`

export const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    margin:auto;
`

export const TitleBig2Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    
    
`

export const TitleBig2 = styled.div`
    margin: auto;
    font-size: 20px;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 15px;
    border: solid 3px rgba(230, 120, 0, 1); 
    padding : 10px;
    width: 200px;
    
`;
export const TitleBig2Content = styled.div`
    font-size: 16px;
    background-color: black;
    color: white;
    border-left: solid 3px rgba(230, 120, 0, 1);
    width: 250px;
    height: 130px;
    margin-top: 4%;
    padding: 3%;

`
