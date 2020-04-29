import React from 'react';
import avatar from '../images/avatar.jpg';

const About = () => {
	return (
		<section id="about">
			<h1>About</h1>
			<div className="about-top">
				<img data-aos="fade-in" src={avatar} alt="adibte" />
				<p>
					This is <span  data-aos="fade-right" data-aos-duration="3000">Adib Rohani's</span> personal website. He's a JavaScript full-stack developer located in Iran, Tehran and
                    working with bunch of new technologies like React.js and Node.js.
				</p>
			</div>
			<div className="knowledge" data-aos="zoom-in" data-aos-duration="1000">
                <span ><i className="fab fa-html5 fa-2x"></i></span>
                <span ><i className="fab fa-css3 fa-2x"></i></span>
                <span ><i className="fab fa-bootstrap fa-2x"></i></span>
                <span ><i className="fab fa-js fa-2x"></i></span>
                <span ><i className="fab fa-vuejs fa-2x"></i></span>
                <span ><i className="fab fa-react fa-2x"></i></span>
                <span ><i className="fab fa-node fa-2x"></i></span>
                <span ><i className="fab fa-node-js fa-2x"></i></span>
                <span ><i className="fab fa-envira fa-2x"></i></span>
            </div>
		</section>
	);
};

export default About;
