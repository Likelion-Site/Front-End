import React from 'react';
import './annualPlan.css'
import Header from '../Header/Header';
import MenuBar from '../Menubar_CurriCulumPage/MenuBar';

function AnnualPlan() {
    return (
        <>
            <Header/>
         <div className="container">
            <MenuBar/>
            {/* <h1>WHAT ABOUT US?</h1> */}
            <hr></hr>
            <div className="box2">
                <div className="box__number2">신입 기수 모집</div>
                <div className="box__title2">
                </div>
                <div className="box__content2">
                멋쟁이 사자처럼 상명대와 함께 열심히 공부하고 활동<br></br>
                    하실 열정적인 아기시자 신입 부원님을 모집합니다.
                </div>
                <div className="circle1">
                    <span className="month">2~3월</span>
                    </div>
                {/* <img className="img2" src="https://item.kakaocdn.net/do/47b82cccfb62e78d71b1590e32a57e5e7154249a3890514a43687a85e6b6cc82" /> */}
            </div>
            <div className="box">
                <div className="box__number">트랙별 교육</div>
                <div className="box__title">
                </div>
                <div className="box__content">
                본격적인 온라인 교육과 오프라인 세미나를 통해 기초부터 탄탄히 공부하고 어쩌고 저쩌꼬 
                </div>
                <div className="circle2">
                    <span className="month2">3~7월</span>
                    </div>
                {/* <img className="img1" src="https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933bafeffd194bae87d73dd00522794070855d" /> */}
            </div>
            <div className="box3">
                <div className="box__number3"><pre className="pre1">
                    팀 프로젝트, 아이디어톤,</pre>
                    <pre className="pre2">해커톤 등 대회 진행</pre>
                    </div>
                <div className="box__title2">
                </div>
                <div className="box__content3">
                내 아이디어를 내 손으로 구현할 수 있는 기획!<br></br>
                열심히 배운 기술등을 토대로 실제 웹사이트를 만들고<br></br>
                배포까지 할 수 있는 시간
                </div>
                <div className="circle3">
                    <span className="month">7~12월</span>
                    </div>
                {/* <img className="img2" src="https://item.kakaocdn.net/do/47b82cccfb62e78d71b1590e32a57e5e7154249a3890514a43687a85e6b6cc82" /> */}
            </div>
          </div>
        </>
    );
}

export default AnnualPlan;