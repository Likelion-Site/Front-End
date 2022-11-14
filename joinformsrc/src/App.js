import react, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './component/Form';
import FormMain from './component/FormMain';
import Header from './component/Header';

function App() {
  return (
    // <div className='App'>
    //   <Header/>
    //   <Main/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<FormMain />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
