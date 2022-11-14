import react, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './component/joinFormPage/Form';
import FormMain from './component/joinFormPage/FormMain';
import Header from './component/Header/Header';
import AnnualPlan from './component/annualPlanPage/annualPlan';
import Curriculum from './component/Menubar_CurriCulumPage/Curriculum';
import Home from './component/Home/Home';
import LikeLion from './component/likelionIntroPage/likelionIntro';

function App() {
  return (
    // <div className='App'>
    //   <Header/>
    //   <Main/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/formmain" element={<FormMain />} />
          <Route path="/form" element={<Form />} />
          <Route path="/annualplan" element={<AnnualPlan />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/likelion" element={<LikeLion />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
