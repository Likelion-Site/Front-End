
import Header from '../Header/Header.js';
import MenuBar from '../Menubar_CurriCulumPage/MenuBar.js';
import ReactDOM from 'react-dom';
import Back from './component/Back.js';
import Bot from './component/Bot.js';
import Last_word from './component/Last_word.js';
import Logo from './component/Logo.js';
import Main_logo from './component/Main_logo.js';
import Mid_text from './component/Mid_text.js';
import Text_lion from './component/Text_lion.js';
import './likelionIntro.css';


// ReactDOM.render(<Main_logo />,document.getElementById('root'));
// ReactDOM.render(<Back />,document.getElementById('mid_root'));
// ReactDOM.render(<Bot />,document.getElementById('intro_main'));
// ReactDOM.render(<Logo />,document.getElementById('intr'));
// ReactDOM.render(<Text_lion />,document.getElementById('int_1'));
// ReactDOM.render(<Text_lion />,document.getElementById('int_2'));


function LikeLion(){
    return (
      <>
        <Header/>
        <MenuBar/>
        <Main_logo></Main_logo>
        <Back/>
        <Bot/>
        <Logo></Logo>
        <Text_lion></Text_lion>
        <Mid_text></Mid_text>
        <Last_word></Last_word>
       </>
    );
}

export default LikeLion;
    