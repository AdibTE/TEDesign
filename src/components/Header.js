import React from 'react';
import logo from '../logo.png';

const Header = () => {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li className="nav-logo">
					<img src={logo} alt="TEDesign logo" />
				</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Header;
