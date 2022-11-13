import{
    TitleBig,
    MainDiv,
    ImgDiv,
    Imgs,
    TitleImg,
    ImgBox,
    ImgBox1,
    ImgBox2,
    TitleBig2,
    TitleBig2Div,
    TitleBig2Content,
    TitleWrap,
   
} from './styledComponent';
import React from "react";

function Curriculum(){
    return (
        <>
        <MainDiv>
        <TitleBig> 학습 언어 </TitleBig>
        <ImgBox>
            <ImgDiv>
                <Imgs src="img/html.png"></Imgs>
                <Imgs src="img/css.png"></Imgs>
                <Imgs src="img/python.png"></Imgs>
                <Imgs src="img/git.png"></Imgs>
                
            </ImgDiv>
            <TitleImg>공통</TitleImg>
        </ImgBox>
        
        <ImgBox2>
        
        <ImgBox1>
            <ImgDiv>
                <Imgs src="img/figma.png"></Imgs>
            </ImgDiv>
            <TitleImg>기획/디자인</TitleImg>
        </ImgBox1>
        <ImgBox1>
            <ImgDiv>
                <Imgs src="img/js.png"></Imgs>
                <Imgs src="img/react.png"></Imgs>
            </ImgDiv>
            <TitleImg>프론트엔드</TitleImg>
        </ImgBox1>
        <ImgBox1>
            <ImgDiv>
                <Imgs src="img/django.png"></Imgs>
            </ImgDiv>
            <TitleImg>백엔드</TitleImg>
        </ImgBox1>
        </ImgBox2>
        
        <TitleWrap>
            <TitleBig2Div>
                <TitleBig2>오프라인 세미나</TitleBig2>
                <TitleBig2Content>격주로 운영진이 직접 진행하는 세미나로 프로젝트에 필요한 다양한 기술들과 언어들의 심화 내용들을 공부하고, 직접 경험해보는 시간을 제공합니다</TitleBig2Content>
            </TitleBig2Div>
            <TitleBig2Div>
                <TitleBig2>프로젝트</TitleBig2>
                <TitleBig2Content>모든 부서가 협업하여 학습한 내용을 바탕으로 하나의 서비스를 기획부터 개발까지 직접 참여합니다</TitleBig2Content>
            </TitleBig2Div>
        </TitleWrap>    
        </MainDiv>
        </>
    );
}export default Curriculum