import React from 'react';

const Home = () => {
	let spans = [];
	for (let i = 0; i < 200; i++) {
		spans.push(<span key={i} />);
	}
	return (
		<section id="home">
			<div className="bg-design">
                {
                    spans.map((sp)=> <span style={{left:Math.random()*100+"vw",top:Math.random()*90+"vh",opacity:Math.random()}}></span>)
                }
            </div>
			<h1 data-aos="zoom-in-down" data-aos-duration="2000">Sense your ideal</h1>
		</section>
	);
};

export default Home;
