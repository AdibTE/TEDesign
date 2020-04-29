import React from 'react';
import img1 from '../images/githubget.png';
import img2 from '../images/tedesign.png';

const Projects = () => {
	return (
		<section id="projects">
			<h1>Projects</h1>
			<div className="project-box">
				<div className="project-item">
					<img src={img1} alt="github get" />
					<div className="details">
						<h3>TEDesign</h3>
						<p>
							<i className="fab fa-react fa-lg" />
							<i className="fab fa-node fa-lg" />
							<i className="fab fa-node-js fa-lg" />
							<i className="fab fa-envira fa-lg" />
						</p>
						<a className="visit-btn" href="#" target="_blank">
							Visit
						</a>
					</div>
				</div>
				<div className="project-item">
					<img src={img2} alt="github get" />
					<div className="details">
						<h3>TEDesign</h3>
						<p>
							<i className="fab fa-react fa-lg" />
							<i className="fab fa-node fa-lg" />
							<i className="fab fa-node-js fa-lg" />
							<i className="fab fa-envira fa-lg" />
						</p>
						<a className="visit-btn" href="#" target="_blank">
							Visit
						</a>
					</div>
				</div>
				<div className="project-item">
					<img src={img1} alt="github get" />
					<div className="details">
						<h3>TEDesign</h3>
						<p>
							<i className="fab fa-react fa-lg" />
							<i className="fab fa-node fa-lg" />
							<i className="fab fa-node-js fa-lg" />
							<i className="fab fa-envira fa-lg" />
						</p>
						<a className="visit-btn" href="#" target="_blank">
							Visit
						</a>
					</div>
				</div>
				<div className="project-item">
					<img src={img2} alt="github get" />
					<div className="details">
						<h3>TEDesign</h3>
						<p>
							<i className="fab fa-react fa-lg" />
							<i className="fab fa-node fa-lg" />
							<i className="fab fa-node-js fa-lg" />
							<i className="fab fa-envira fa-lg" />
						</p>
						<a className="visit-btn" href="#" target="_blank">
							Visit
						</a>
					</div>
				</div>
				<div className="project-item">
					<img src={img1} alt="github get" />
					<div className="details">
						<h3>TEDesign</h3>
						<p>
							<i className="fab fa-react fa-lg" />
							<i className="fab fa-node fa-lg" />
							<i className="fab fa-node-js fa-lg" />
							<i className="fab fa-envira fa-lg" />
						</p>
						<a className="visit-btn" href="#" target="_blank">
							Visit
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
