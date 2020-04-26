import React from 'react';
import logo from '../logo.png';

const Header = () => {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li><a href="#AboutLink">About</a></li>
				<li className="nav-logo">
					<a href="https://github.com/adibte/" target="blank"><img src={logo} alt="TEDesign logo" /></a>
				</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Header;
