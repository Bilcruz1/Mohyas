import React from 'react';

export default function Notifications() {
	return (
		<div>
			<div className=" bg-[#664400]  font-sans flex flex-col justify-center items-center rounded-lg lg:h-[338px] lg:my-[70px] my-[40px] lg:py-[70px] py-[24px]">
				<p className="text-center lg:text-[40px] font-montserrat text-[20px]  text-[#ffffff]">
					Subscribe our Notification,
					<br /> News and Blog
				</p>
				<div className="flex mt-[40px]   bg-white rounded-md border-[1px] border-[#C4C4C4] lg:px-[20px] px-[16px] lg:py-[12px] py-[8px] lg:w-[60%]">
					<input
						type="text"
						placeholder="Your mail"
						className="flex-grow outline-none text-gray-700 placeholder-[#C4C4C4] text-[20px] leading-[32px]"
					/>
					<button className="bg-[#CC9933] text-white px-4 py-2 rounded-md">
						Send
					</button>
				</div>
			</div>
		</div>
	);
}
