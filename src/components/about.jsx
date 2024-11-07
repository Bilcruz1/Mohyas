import React from 'react';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import { Link } from 'react-scroll';

export default function About() {
	return (
		<div>
			<div
				className="lg:px-[110px] lg:mt-[200px] mt-[190px] lg:pb-[90px] pb-[24px]"
				id="about"
			>
				<div>
					<p className="text-center  lg:text-[40px] text-[24px] text-[#CC9933] font-montserrat  font-bold">
						Our Journey
					</p>
					<div className="flex flex-col lg:flex-row w-full lg:mt-[40px] mt-[24px] lg:gap-[40px] items-stretch font-sans">
						{/* Image Section */}
						<div className="w-full lg:w-1/2 flex flex-col gap-[9px]">
							<div className="w-full h-[287px]">
								<img
									src={home1}
									alt="home1"
									className="w-full h-full object-cover lg:rounded-lg"
								/>
							</div>
							<div className="lg:flex gap-[9px] hidden">
								<div className="w-1/2 h-[277px]">
									<img
										src={home2}
										alt="home2"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="w-1/2 h-[277px]">
									<img
										src={home3}
										alt="home3"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
							</div>
						</div>

						{/* Content Section */}
						<div className="w-full lg:w-1/2  lg:px-[0px] px-[16px] lg:mt-[0px] mt-[24px] flex flex-col justify-center">
							<div>
								<p className=" text-[#333333] lg:text-[24px] text-[20px] font-montserrat font-medium">
									About Mohyas Prime Estate
								</p>
								<p className="lg:pt-[20px] pt-[16px] text-[#666666] lg:text-[20px]  text-[16px] lg:leading-[43px] leading-[36px] font-sans ">
									Established with a vision to redefine the real estate
									market, Mohyas Prime Estate has grown into a trusted name for
									luxury properties. Our mission is to provide exceptional
									service and deliver results that exceed expectations.
									<br />
									<br />
									We believe in building long-term relationships with our
									clients, guided by our core values of integrity, transparency,
									and excellence.
								</p>
							</div>
							<Link
								className="rounded-md hover:cursor-pointer bg-[#CC9933] text-[16px] text-[#ffffff]  font-bold  px-[30px] py-[12px] text-base lg:flex items-center w-fit lg:mt-[46px] mt-[24px] "
								to="contact"
								duration={500}
								smooth={true}
								offset={-70}
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
