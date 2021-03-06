import React, { useEffect } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
			<Projects />
		</div>
	);
}

export default App;
