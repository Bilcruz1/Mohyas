import React from 'react';
import free_consult from '../assets/icons/Consultation.png';

export default function Services() {
	return (
		<>
			<div
				className="lg:px-[0px] px-[16px] lg:mt-[90px] mt-[36px] lg:pb-[90px] pb-[20px]"
				id="services"
			>
				<div className=" w-full lg:px-[110px] ">
					<h1 className="text-[#CC9933] lg:text-[40px] text-[24px]  font-bold font-cabinet-bold  w-full  text-center">
						Our Services
					</h1>

					<p className="pt-[16px] lg:px-[56px] text-[#333333] lg:text-[20px] text-[16px] leading-[32px] text-center font-sans">
						At Mohyas Prime Estate, we offer a wide range of real estate
						services tailored to meet your needs. Whether you're buying,
						selling, leasing, or looking for property management, our team is
						here to assist you every step of the way.
					</p>
					<div>
						<div className="grid lg:grid-cols-2  mt-[40px] gap-[40px]">
							<div className=" bg-[#FFFAF0] p-[32px] rounded-xl ">
								<img
									src={free_consult}
									alt="home3"
									className=""
								/>
								<h1 className="pt-[24px] text-[#333333] font-bold lg:text-[24px] text-[20px] font-sans">
									Free Consultation
								</h1>
								<p className="pt-[12px] text-[#666666] text-[16px] leading-[28px] ">
									Not sure where to start? Schedule a free consultation with one
									of our experts to discuss your needs and explore the best
									options available to you.
								</p>
							</div>
							<div className=" bg-[#FFFAF0] p-[32px] rounded-xl ">
								<img
									src={free_consult}
									alt="home3"
									className=""
								/>
								<h1 className="pt-[24px] font-bold text-[24px]">
									Free Consultation
								</h1>
								<p className="pt-[12px] text-[16px] leading-[28px] ">
									Not sure where to start? Schedule a free consultation with one
									of our experts to discuss your needs and explore the best
									options available to you.
								</p>
							</div>
							<div className=" bg-[#FFFAF0] p-[32px] rounded-xl ">
								<img
									src={free_consult}
									alt="home3"
									className=""
								/>
								<h1 className="pt-[24px] font-bold text-[24px]">
									Free Consultation
								</h1>
								<p className="pt-[12px] text-[16px] leading-[28px] ">
									Not sure where to start? Schedule a free consultation with one
									of our experts to discuss your needs and explore the best
									options available to you.
								</p>
							</div>
							<div className=" bg-[#FFFAF0] p-[32px] rounded-xl ">
								<img
									src={free_consult}
									alt="home3"
									className=""
								/>
								<h1 className="pt-[24px] font-bold text-[24px]">
									Free Consultation
								</h1>
								<p className="pt-[12px] text-[16px] leading-[28px] ">
									Not sure where to start? Schedule a free consultation with one
									of our experts to discuss your needs and explore the best
									options available to you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
