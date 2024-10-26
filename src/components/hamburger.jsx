import React, { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll'; // For scrolling within the page
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // For routing to other pages
import logo from '../assets/images/logof.svg';
import { InlineWidget } from 'react-calendly';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const [showCalendly, setShowCalendly] = useState(false);
	const navigate = useNavigate(); // To handle routing

	useEffect(() => {
		setAnimation('animate-fadeSlideDown');
	}, []);

	const handleClose = () => {
		setAnimation('animate-fadeSlideUp');
		setTimeout(() => setIsOpen(false), 500); // Adjust timeout to match animation duration
	};

	const handleShowCalendly = () => {
		setShowCalendly(true);
	};

	const handleHideCalendly = () => {
		setShowCalendly(false);
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			navigate('/');
			handleClose();
			setTimeout(() => {
				if (sectionId) {
					const element = document.getElementById(sectionId);
					if (element) {
						window.scrollTo({
							top: element.offsetTop - 70,
							behavior: 'smooth',
						});
					}
				}
			}, 100); // Delay to ensure route change has completed
		} else {
			navigate(path);
			handleClose();
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={handleClose}
			></div>
			<div
				className={`relative top-0 w-full  text-center transform transition-transform duration-500 ease-in-out ${animation}`}
			>
				<div className="flex justify-between bg-[#ffffff] pt-6 px-4">
					<a href="#">
						<img
							src={logo}
							alt="Logo"
							className="h-8 md:h-12 "
							onClick={() => {
								handleNavigation('/');
							}}
						/>
					</a>
					<button
						className="rounded-md text-[#3a5791]"
						onClick={handleClose}
					>
						<HiX
							className="h-7 w-7 text-[#666666]"
							size={14}
						/>
					</button>
				</div>

				<div className="bg-[#ffffff] w-full font-medium font-cabinet-bold flex flex-col items-center gap-[24px] pb-[24px]  ">
					{/* Scroll to Home Section */}
					<ScrollLink
						to="home"
						duration={500}
						smooth={true}
						offset={-70} // Adjust to navbar height
						onClick={() => handleNavigation('/', 'home')}
						className="text-[16px] cursor-pointer text-[#666666] mt-[24px]"
					>
						Home
					</ScrollLink>

					{/* Scroll to About Us Section */}
					<ScrollLink
						to="about"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'about')}
						className="text-[16px] cursor-pointer text-[#666666]"
					>
						About Us
					</ScrollLink>

					{/* Scroll to Our Team Section */}
					<RouterLink
						to="/property-listing"
						className="text-[16px] cursor-pointer text-[#666666]"
						onClick={() => handleNavigation('/property-listing')}
					>
						Property Listing
					</RouterLink>
					<ScrollLink
						to="services"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'services')}
						className="text-[16px] cursor-pointer text-[#666666]"
					>
						Services
					</ScrollLink>
					{/* <ScrollLink
						to="team"
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleNavigation('/', 'team')}
						className="text-[16px] cursor-pointer text-[#666666]"
					>
						Contact Us
					</ScrollLink> */}

					{/* Scroll to Our Services Section */}

					{/* Divider */}
					<div className="w-full h-[1px] bg-[#666666]"></div>
					<a href="#">
						<button className="rounded-md hover:cursor-pointer text-[#666666] border-[#666666] border-[3px] px-[18px] py-[12px] text-[16px] font-medium lg:flex items-center ">
							Contact us
						</button>
					</a>

					{/* Navigate to Property Listing Page */}

					{/* Show Calendly Widget */}
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
