import React from 'react';
import HeroSection from '../heroSection.jsx';
import About from '../about.jsx';
import WhyUs from '../whyUs.jsx';
import Services from '../services.jsx';
import Latest from '../latest.jsx';
import Founder from '../founder.jsx';
import Feedbacks from '../feedbacks.jsx';

const Home = () => {
	return (
		<>
			<HeroSection />
			<About />
			<WhyUs />
			<Services />
			<Latest />
			<Founder />
			<Feedbacks />
		</>
	);
};

export default Home;
