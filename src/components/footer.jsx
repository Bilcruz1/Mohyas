import React from 'react';
import footer_logo from '../assets/images/logof.svg';
import { Link } from 'react-scroll';
import location_logo from '../assets/icons/location.png';
import facebook_logo from '../assets/icons/facebook.png';
import youtube_logo from '../assets/icons/tube.png';
import twitter_logo from '../assets/icons/Twitter.png';
import instagram_logo from '../assets/icons/Instagram.png';
// import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
	return (
		<div>
			<div className="bg-[#ffffff] font-sans lg:h-[272px] lg:px-[180px] px-[16px] lg:pt-[64px] pt-[24px] pb-[24px]">
				<div className="flex lg:flex-row flex-col items-center lg:justify-between">
					<img
						src={footer_logo}
						alt="footer_logo"
						className="lg:h-[47px] lg:w-[156px] h-[65px] w-[88px] cursor-pointer"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					/>

					<div className="flex lg:flex-row flex-col justify-between items-center lg:pt-0 pt-[40px] lg:gap-5 gap-[28px] text-[#333333] ">
						<Link
							to="/"
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="lg:text-[16px] text-[14px] font-medium   cursor-pointer "
						>
							Home
						</Link>
						<Link
							to="about"
							duration={500}
							smooth={true}
							offset={-100}
							className="lg:text-[16px] text-[14px] font-medium   cursor-pointer "
						>
							About Us
						</Link>

						<Link
							to="services"
							duration={500}
							smooth={true}
							offset={-80}
							className="lg:text-[16px] text-[14px] font-medium    cursor-pointer "
						>
							Our Services
						</Link>
						<Link
							to="services"
							duration={500}
							smooth={true}
							offset={-70}
							className="lg:text-[16px] text-[14px] font-medium   cursor-pointer "
						>
							Our Projects
						</Link>
					</div>

					<div className="flex  lg:mt-0 mt-[64px] gap-[16px]">
						<img
							src={location_logo}
							alt="location_logo"
						/>
						<p> 123 Prime Estate Blvd, City, Country</p>
					</div>
				</div>
				<div className="h-[1px] bg-[#ECECEC] mx-[50px] mt-[30px] "></div>
				<div className="flex flex-row px-auto justify-center lg:gap-[16px] mt-[30px] ">
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
							src={youtube_logo}
							alt="youtube_logo"
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
							src={instagram_logo}
							alt="instagram_logo"
						/>
					</a>
				</div>
				<div className="flex col justify-center items-center pb-[30px]">
					<p className="mt-[24px] leading-[18px] text-[16px] flex justify-center items-center text-[#898989]">
						All right reserved
					</p>
				</div>
			</div>
		</div>
	);
}
