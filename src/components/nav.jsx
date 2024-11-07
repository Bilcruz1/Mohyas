import React, { useState, useEffect } from 'react';
import logo from '../assets/mohyas_logo.svg';
import { HiMenu } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import Hamburger from './hamburger.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Scroll to top on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	// Sections to track for scrolling
	const sections = ['home', 'about', 'services', 'contact'];

	useEffect(() => {
		if (location.pathname === '/property-listing') {
			setActiveSection('property');
		} else {
			setActiveSection('home');
		}
	}, [location]);

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
					offset: -70,
					duration: 500,
				});
				setActiveSection(section);
			}, 100);
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	const activeStyle = {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: '16px',
		position: 'relative',
	};

	const inactiveStyle = {
		color: '#A2A2A2',
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
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}
			<div className="fixed z-40 top-0 bg-black w-screen md:py-5 py-[24px] lg:px-[110px] px-[16px]">
				<div className="flex justify-between">
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className="h-8 md:h-12"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							/>
						</a>
					</div>
					<button
						className="lg:hidden text-[#ffffff] flex justify-between items-center"
						onClick={handleOpen}
					>
						<HiMenu className="w-8 h-8" />
					</button>
					<div className="lg:flex justify-between items-center gap-[20px] hidden font-cabinet-bold text-[16px]">
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer relative"
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
							{activeSection === 'home' && <span style={underlineStyle} />}
						</button>
						<button
							onClick={() => scrollToSection('about')}
							className="cursor-pointer relative"
							style={activeSection === 'about' ? activeStyle : inactiveStyle}
						>
							About Us
							{activeSection === 'about' && <span style={underlineStyle} />}
						</button>
						<RouterLink
							to="/property-listing"
							className="cursor-pointer relative"
							style={activeSection === 'property' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('property')}
						>
							Property Listing
							{activeSection === 'property' && <span style={underlineStyle} />}
						</RouterLink>
						<button
							onClick={() => scrollToSection('services')}
							className="cursor-pointer relative"
							style={activeSection === 'services' ? activeStyle : inactiveStyle}
						>
							Services
							{activeSection === 'services' && <span style={underlineStyle} />}
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className="cursor-pointer relative"
							style={activeSection === 'contact' ? activeStyle : inactiveStyle}
						>
							Contact Us
							{activeSection === 'contact' && <span style={underlineStyle} />}
						</button>
					</div>
					<button className="rounded-lg hover:cursor-pointer text-[#ffffff] border-[#ffffff] border-[3px] px-[30px] py-[12px] text-[16px] font-medium lg:flex items-center hidden">
						Contact us
					</button>
				</div>
			</div>
		</>
	);
}
