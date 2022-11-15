
import ReactDOM from 'react-dom';
import Back from './component/Back.js';
import Bot from './component/Bot.js';
import Last_word from './component/Last_word.js';
import Logo from './component/Logo.js';
import Main_logo from './component/Main_logo.js';
import Mid_text from './component/Mid_text.js';
import Text_lion from './component/Text_lion.js';
import './LikeLion.css';



function LikeLion(){
    return (
        <>
        
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