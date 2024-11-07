import React from 'react';
import property_image from '../assets/images/property-image.png';
import property_image_mobile from '../assets/images/property-image-mobile.png';
import { Link } from 'react-scroll';

export default function Achievements() {
	return (
		<div>
			<div className="flex lg:flex-row flex-col justify-between gap-[34px] lg:py-[90px]  items-stretch">
				<div className="lg:w-[60%] w-full">
					<img
						src={property_image}
						alt="Property Image"
						className=" lg:block hidden w-full h-full object-fill rounded-md"
					/>
					<img
						src={property_image_mobile}
						alt="Property Image"
						className=" lg:hidden block w-full h-full object-fill rounded-md"
					/>
				</div>
				<div className="lg:w-[40%] w-full flex flex-col justify-between lg:pb-[50px] pb-[24px]">
					<div>
						<p className=" lg:block hidden font-montserrat font-medium lg:text-[40px] text-[20px] text-[#333333]">
							Our achievements <br /> reflect our <br /> dedication
						</p>
						<p className=" lg:hidden block font-medium lg:text-[40px] text-[20px] text-[#333333]">
							Our achievements reflect our dedication
						</p>
						<p className="lg:text-[96px] text-[24px] font-medium text-[#CC9933] lg:pt-[20px] pt-[16px] ">
							10k+
						</p>
						<p className="lg:text-[20px] text-[14px] leading-[32px] text-[#666666]">
							Happy customer with our services
						</p>
						<p className="lg:text-[96px] text-[24px]font-medium text-[#CC9933] lg:pt-[20px] pt-[16px] ">
							31k+
						</p>
						<p className="lg:text-[20px] text-[14px] leading-[32px] text-[#666666]">
							Our best properties
						</p>
						<p className="lg:text-[96px] text-[24px] font-medium text-[#CC9933] lg:pt-[20px] pt-[16px] ">
							26k+
						</p>
						<p className="lg:text-[20px] text-[14px] leading-[32px] text-[#666666]">
							Companies with us
						</p>
					</div>
					<div className="mt-[40px]">
						<Link
							className="rounded-md hover:cursor-pointer bg-[#CC9933] text-[#ffffff] px-[40px] py-[16px] text-[16px] font-cabinet-bold font-bold"
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
	);
}
