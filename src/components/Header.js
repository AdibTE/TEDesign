import React from 'react';
import logo from '../logo.png';

const Header = () => {
	return (
		<nav>
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li className="nav-logo">
					<a href="https://github.com/adibte/" target="blank"><img src={logo} alt="TEDesign logo" /></a>
				</li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
};

export default Header;
