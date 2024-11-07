import React from 'react';

export default function ContactUs() {
	return (
		<>
			<div
				className="flex lg:flex-row flex-col lg:bg-[#FFF9EE] lg:gap-[105px]"
				id="contact"
			>
				<div className="lg:w-[45%] w-full">
					<div className="w-[100%] lg:h-full h-[478px]  ">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?q=Johnwood%20Hotel%20by%20Bolton,Plot%20978,979,Beside%20Magistrate%20Court,Kuchiyako,Kuje,FCT-Abuja&output=embed&zoom=disable&scrollwheel=0"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className="lg:w-[65%] w-full lg:pr-[100px] lg:py-[80px] py-[32px] ">
					<div className=" w-full lg:p-[48px]  bg-[#ffffff] rounded-3xl ">
						<p className="text-[#061C3D] lg:px-[0px] px-[16px] text-[32px] leading-[40px] font-bold">
							Contact us
						</p>
						<form className="pt-[32px] lg:px-[0] px-[16px]">
							<div className="mb-[20px] flex lg:flex-row flex-col w-full gap-[20px]">
								<div className="w-full">
									<label className="block text-[#061C3D] text-[14px]  leading-[20px] mb-[6px]">
										Name
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] border-[#E6E8EC] border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="name"
										type="text"
										placeholder="Full name"
										name="name"
										required
									/>
								</div>
								<div className="w-full">
									<label className="block text-[#061C3D] text-[14px] leading-[20px]  mb-[6px]">
										Email
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] border-[#E6E8EC]  border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email address"
										name="email"
										required
									/>
								</div>
							</div>

							<div className="mb-[20px]">
								<div className="w-full">
									<label className="block text-[#061C3D] text-[14px]  leading-[20px] mb-[6px]">
										Company Name
									</label>
									<input
										className="appearance-none text-[16px] leading-[24px] border-[#E6E8EC] border rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline focus:shadow-outline"
										id="name"
										type="text"
										placeholder="Brand/Company/Product Name"
										name="company name"
										required
									/>
								</div>
							</div>
							<div className="mb-[20px]">
								<label className="block text-[#061C3D] text-[14px]  leading-[20px] mb-[6px]">
									Message
								</label>
								<textarea
									className="shadow appearance-none text-[16px] leading-[24px] border border-[#E6E8EC] h-[120px] resize-none rounded w-full py-[12px] px-[18px] text-[#838E9E] focus:outline-none focus:shadow-outline"
									id="message"
									placeholder="Tell us about your project..."
									name="message"
									rows="4"
									required
								></textarea>
							</div>
							<div className="flex lg:items-center lg:justify-start justify-center lg:mt-[32px] mt-[24px]">
								<button
									className="bg-[#CC9933] text-[#ffffff] text-[16px] leading-[48px] flex justify-center items-center font-bold text-center  lg:h-[48px] h-[41px] w-full lg:rounded-r-lg lg:rounded-l-lg rounded-lg focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Request a quote →
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
