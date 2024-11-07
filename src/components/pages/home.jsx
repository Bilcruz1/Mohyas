import React from 'react';
import HeroSection from '../heroSection.jsx';
import About from '../about.jsx';
import WhyUs from '../whyUs.jsx';
import Services from '../services.jsx';
import Latest from '../latest.jsx';
import Founder from '../founder.jsx';
import Feedbacks from '../feedbacks.jsx';
import ContactUs from '../contactUs.jsx';

const Home = () => {
	return (
		<>
			<div className="font-sans">
				<HeroSection />
				<About />
				<WhyUs />
				<Services />
				<Latest />
				<Founder />
				<Feedbacks />
				<ContactUs />
			</div>
		</>
	);
};

export default Home;
