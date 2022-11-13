import React from 'react';
import './css/Form.css';
import Header from './Header';

function Form(){
    return(
        <div>
            <Header/>
            <div className="joinform"> 
                <div className='deadline'>
                    <p>2023.00.00 ~ 2023.00.00</p>
                </div>
                <div className='title'>
                    <p>멋쟁이사자처럼 상명대학교와 함께 할 11기 모집</p>
                </div> 
                <div className='hyl'>
                    <p>“내 아이디어를 내 손으로 실현한다. HACK YOUR LIFE!”</p>
                </div>
                <div className='c'>
                       <div>멋쟁이사자처럼 대학은 온라인 기반의 강의와 오프라인 활동이 함께 이루어지는 코딩 교육 동아리 입니다.</div>
                       <div>이를 통해 컴퓨터를 모르는 학생들이 프로그래밍 교육을  수행하여 원하는 IT 서비스를 직접 런칭합니다.</div> 
                       <div>멋쟁이사자처럼에서 2023년 멋쟁이 사자처럼 상명대학교와 함께할 11기 학생들을 모집합니다.</div>
                    <div className='p'>
                        <hr/>
                        <p>*필수항목</p> 
                    </div>
                </div>
                <div className="formbox">
                </div>
                <div className="line">
                    <div className="linefont">
                        <div>개</div>
                        <div>인</div> 
                        <div>정</div>
                        <div>보</div> 
                        <div>수</div>
                        <div>집</div> 
                        <div>동</div>
                        <div>의</div>
                        <div>안</div>
                        <div>내</div>
                    </div>       
                </div>
            </div>
            
        </div>

    );

};

export default Form; //다른 js파일에서 불러올 수 있도록 내보냄