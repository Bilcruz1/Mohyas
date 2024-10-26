import React from 'react';
import founder from '../assets/images/founder.png';

export default function Founder() {
	return (
		<div>
			<div
				className="lg:px-[110px] lg:mt-[0px] mt-[24p] lg:py-[90px] pb-[24px] bg-[#F7F9FB]"
				id=""
			>
				<div>
					<div className="flex flex-col lg:flex-row w-full lg:mt-[0px] mt-[24px] lg:gap-[40px] items-stretch font-sans">
						{/* Image Section */}
						<div className="w-full lg:w-1/2 ">
							<div className="w-full h-[500px]">
								<img
									src={founder}
									alt="founder"
									className="w-full h-full object-cover lg:rounded-lg"
								/>
							</div>
						</div>

						{/* Content Section */}
						<div className="w-full lg:w-1/2  lg:px-[0px] px-[16px] lg:mt-[0px] mt-[24px] flex flex-col justify-center">
							<div>
								<p className=" text-[#333333] lg:text-[32px] text-[24px] font-cabinet-medium font-medium">
									Abdulbariu Hassan
								</p>
								<p className="text-[#333333] lg:text-[16px] text-[16px] font-cabinet-medium font-medium">
									Founder Mohyas
								</p>
								<p className="lg:pt-[16px] pt-[16px] text-[#666666] lg:text-[20px] text-[16px] lg:leading-[43px] leading-[36px] font-sans ">
									At Mohyas Prime Estate, we believe that a home is more than
									just a place, it's a reflection of your dreams, aspirations,
									and the life you wish to build. As the CEO of this esteemed
									company.
									<br />
									<br />I am proud to lead a team of dedicated professionals who
									share a common goal: to help you find a property that truly
									feels like home.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
