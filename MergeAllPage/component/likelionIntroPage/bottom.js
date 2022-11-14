
import w_back from './img/white_back.png';
import lion_x from './img/lionxsang.png';
import background from './img/background.png';
import wau from './img/WAU.png';
import txt_1 from './img/first_txt.png';
import txt_2 from './img/second_txt.png';
import saja from './img/lion_scary.png';
import foim from './img/logo1.png';


function Bot() {
    return (
        <div className = "main_img">
            <img className = "white" src={w_back} alt="back_img"></img>
           
        </div>
    )
}

function Logo() {
    return (
        <div className="logoda">
            <img className = "sang_logo" src={lion_x} alt="lo"></img>
        </div>
    )   
   
}

function Back(){
    return (
        <div className = "likeback">
            <img className = "lionback" src={background} alt="backimg"></img>
        </div>
    )
}

function App(){
    return (
        <div className="logonation">
            <img className = "logo" src={wau} alt="logo"></img>
        </div>
    );
}

function Text_lion() {
    return (
        <div className="text_1">
            <img className="txt1" src={txt_1}></img>
            <img className="txt2" src={txt_2}></img>
            <br/>
            <img className="lion_img3" src={saja}></img>
        </div>

        
    )
}


export {Bot, Logo, Back, App, Text_lion};