import React, { useState, useEffect } from 'react';
import logo from '../assets/mohyas_footer_logo.svg';
import facebook_logo from '../assets/icons/facebook_icon_f.svg';
import youtube_logo from '../assets/icons/youtube_icon_f.svg';
import twitter_logo from '../assets/icons/twitter_icon_f.svg';
import instagram_logo from '../assets/icons/instagram_icon_f.svg';

import { HiMenu } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // For routing
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling inside homepage
import Hamburger from './hamburger.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Sections to track for scrolling
	const sections = ['home', 'about', 'services', 'contact'];

	useEffect(() => {
		if (location.pathname === '/property-listing') {
			setActiveSection('property');
		} else {
			setActiveSection('home');
		}
	}, [location]);

	// Add scroll event listener to track active section
	useEffect(() => {
		const handleScroll = () => {
			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					smooth: true,
					offset: -70, // Adjust this offset as per your navbar height
					duration: 500,
				});
				setActiveSection(section);
			}, 100); // Small delay for navigation
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	// Active and inactive styles for font size and underline
	const activeStyle = {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: '16px',
		position: 'relative',
	};

	const inactiveStyle = {
		color: '#ffffff',
		fontWeight: 'medium',
		fontSize: '16px',
	};

	const underlineStyle = {
		content: '""',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: '-4px',
		height: '2px',
		backgroundColor: '#ffffff',
	};

	return (
		<>
			<div className=" bg-[#CC9933]   lg:py-[50px] py-[40px] lg:px-[110px] px-[16px]">
				<div className="flex lg:flex-row flex-col justify-between">
					<div className="flex lg:justify-start justify-center">
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className="h-8 md:h-12"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							/>
						</a>
					</div>

					<div className="flex lg:flex-row flex-col justify-between items-center lg:gap-[20px] gap-[16px] lg:pt-0 pt-[40px] text-[16px]">
						{/* Scroll Link for Home */}
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer relative"
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
							{activeSection === 'home' && <span style={underlineStyle} />}
						</button>

						{/* Scroll Link for About Us */}
						<button
							onClick={() => scrollToSection('about')}
							className="cursor-pointer relative"
							style={activeSection === 'about' ? activeStyle : inactiveStyle}
						>
							About Us
							{activeSection === 'about' && <span style={underlineStyle} />}
						</button>

						{/* Route to Property Listing */}
						<RouterLink
							to="/property-listing"
							className="cursor-pointer relative"
							style={activeSection === 'property' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('property')}
						>
							Property Listing
							{activeSection === 'property' && <span style={underlineStyle} />}
						</RouterLink>

						{/* Scroll Link for Services */}
						<button
							onClick={() => scrollToSection('services')}
							className="cursor-pointer relative"
							style={activeSection === 'services' ? activeStyle : inactiveStyle}
						>
							Services
							{activeSection === 'services' && <span style={underlineStyle} />}
						</button>

						{/* Scroll Link for Contact */}
						<button
							onClick={() => scrollToSection('contact')}
							className="cursor-pointer relative"
							style={activeSection === 'contact' ? activeStyle : inactiveStyle}
						>
							Contact Us
							{activeSection === 'contact' && <span style={underlineStyle} />}
						</button>
					</div>
					<div className="flex  lg:px-auto justify-center  lg:gap-[16px] gap-[32px] lg:mt-[30px] mt-[40px] ">
						<a
							href="#"
							className=""
						>
							<img
								src={instagram_logo}
								alt="instagram_logo"
							/>
						</a>

						<a
							href="#
"
							className=" "
						>
							<img
								src={facebook_logo}
								alt="facebook_logo"
							/>
						</a>
						<a
							href="#"
							className=""
						>
							<img
								src={twitter_logo}
								alt="twitter_logo"
							/>
						</a>
						<a
							href="#"
							className=""
						>
							<img
								src={youtube_logo}
								alt="youtube_logo"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
