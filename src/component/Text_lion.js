import txt_1 from '../img/first_txt.png';
import txt_2 from '../img/second_txt.png';
import saja from '../img/lion_scary.png';

function Text_lion() {
    return (
        <div className="text_1">
            <img className="txt1" src={txt_1}></img>
            <img className="txt2" src={txt_2}></img>
            <br/>
            <img className="lion_img3" src={saja}></img>
        </div>

        
    );
}

export default Text_lion;