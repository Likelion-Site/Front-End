import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './MenuBar';
import Main from './Main';
import Curriculum from './Curriculum';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<MenuBar />
				<Routes>
					<Route path="/" element={<Main />}></Route>
          			<Route path="/curriculum" element={<Curriculum />}></Route>
					
			
				</Routes>
			</BrowserRouter>
      <h1>푸터 들어갈 공간입니다 .</h1>
		</div>
	);
};

export default App;