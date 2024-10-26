import React from 'react';
import rea from '../assets/icons/rea.png';
import epl from '../assets/icons/epl.png';
import cca from '../assets/icons/cca.png';

export default function WhyUs() {
	return (
		<div className="relative bg-[#000001] lg:h-[928px] h-[410px] w-full py-[95px] lg:mt-[0px] mt-[20px] lg:px-[110px] px-[16px] flex items-center">
			{/* Background Image Section */}
			<div className="lg:h-[738px] h-[350px] bg-[url('/src/assets/images/home4.png')] bg-cover lg:w-[60%] w-[75%] border-[#A2A2A2] border-[1px] absolute lg:right-[110px] right-[16px] top-[50%] transform -translate-y-1/2"></div>

			{/* Left-Aligned Content Section */}
			<div className="bg-[#ffffff] lg:w-[60%] w-[85%]  lg:py-[40px] py-[20px] lg:px-[40px] px-[20px] z-10 shadow-lg absolute left-0 lg:ml-[110px] ml-[16px]">
				<h1 className="text-[#CC9933] lg:text-[40px] text-[24px] font-cabinet-bold font-bold text-left">
					Why Choose Us
				</h1>
				<p className="lg:mt-[16px] mt-[6px] lg:text-[20px] text-[12px] font-sans lg:leading-[43px] leading-[20px] text-[#666666] text-left">
					At Mohyas Prime Estate, we pride ourselves on offering personalized
					service, unmatched market expertise, and exclusive listings you won't
					find elsewhere.
				</p>
				<div className="flex flex-row  lg:items-center items-start w-full lg:mt-[46px] mt-[16px] lg:justify-between justify-center gap-[20px] lg:gap-[46px]">
					{[
						{ text: 'Expert Real Estate Agents', icon: rea },
						{ text: 'Exclusive Property Listings', icon: epl },
						{ text: 'Customer-Centric Approach', icon: cca },
					].map((item, index) => (
						<div
							className="lg:w-[30%] w-full lg:flex lg:flex-col items-center"
							key={index}
						>
							<div className="flex lg:justify-center lg:items-center">
								<img
									src={item.icon}
									alt="icon"
									className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]"
								/>
							</div>

							<p className="pt-[16px] lg:text-[24px] text-[12px] lg:leading-[28px] leading-[18px] font-sans lg:text-center">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
