
import ReactDOM from 'react-dom';
import Back from './component/Back.js';
import Bot from './component/Bot.js';
import Logo from './component/Logo.js';
import Main_logo from './component/Main_logo.js';
import Text_lion from './component/Text_lion.js';


ReactDOM.render(<Main_logo />,document.getElementById('root'));
ReactDOM.render(<Back />,document.getElementById('mid_root'));
ReactDOM.render(<Bot />,document.getElementById('intro_main'));
ReactDOM.render(<Logo />,document.getElementById('intr'));
ReactDOM.render(<Text_lion />,document.getElementById('int_1'));
ReactDOM.render(<Text_lion />,document.getElementById('int_2'));

