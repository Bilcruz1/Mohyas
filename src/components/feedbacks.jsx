import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import quote from '../assets/icons/quote.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';
import arrowNext from '../assets/icons/ArrowRight.svg';
import arrowBack from '../assets/icons/ArrowLeft.svg';

export default function Feedbacks() {
	const [currentSlide, setCurrentSlide] = useState(1);

	// Example feedback data
	const feedbacks = [
		{
			text: 'Their success stories are a testament to our commitment to excellence.',
			subtext:
				'Hear from our satisfied clients who have found their dream homes through us.',
			name: 'Abdulbariu Hassan',
			role: 'Client',
		},
		{
			text: 'Their success stories are a testament to our commitment to excellence.',
			subtext:
				'Hear from our satisfied clients who have found their dream homes through us.',
			name: 'Abdulbariu Hassan',
			role: 'Client',
		},
		{
			text: 'Their success stories are a testament to our commitment to excellence.',
			subtext:
				'Hear from our satisfied clients who have found their dream homes through us.',
			name: 'Abdulbariu Hassan',
			role: 'Client',
		},
		// Add more feedback entries here as needed
	];

	const handleSlideChange = swiper => {
		setCurrentSlide(swiper.realIndex + 1); // Update the current slide number (0-indexed so we add 1)
	};

	return (
		<div className=" w-full bg-[#191919] lg:px-[110px] px-[16px] lg:py-[90px] py-[40px]">
			<div className="flex justify-between">
				<p className="text-[#CC9933] font-montserrat lg:text-[40px] text-[24px] font-bold lg:w-[25%] w-[75%] lg:leading-[60px]">
					What Our Customer Say About Us
				</p>

				{/* Custom navigation buttons */}
				<div className="lg:flex hidden gap-[16px] items-center">
					{' '}
					<div className=" ">
						<div className="custom-next border-2 border-[#ffffff]  hover:text-black text-[#ffffff] hover:bg-[#ffffff] bg-opacity-50  lg:px-[8px] px-[6px] lg:py-[8px] py-[9px] rounded-2xl cursor-pointer hover:bg-opacity-70 ">
							{/* <img
								src={arrowNext}
								alt="Next"
								className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
							/> */}
							<IoIosArrowRoundBack className="lg:w-[50px] w-[22px] h-[16px] lg:h-[50px]" />
						</div>
					</div>
					<div className=" ">
						<div className="custom-next border-2 border-[#ffffff]  hover:text-black text-[#ffffff] hover:bg-[#ffffff] bg-opacity-50  lg:px-[8px] px-[6px] lg:py-[8px] py-[9px] rounded-2xl cursor-pointer hover:bg-opacity-70 ">
							{/* <img
								src={arrowNext}
								alt="Next"
								className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
							/> */}
							<IoIosArrowRoundForward className="lg:w-[50px] w-[22px] h-[16px] lg:h-[50px]" />
						</div>
					</div>
				</div>
			</div>

			<Swiper
				modules={[Navigation, Autoplay, Pagination]}
				spaceBetween={30}
				slidesPerView={1} // Default to 1 slide per view for small screens
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				loop={true}
				autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
				pagination={{
					clickable: true,
					el: '.custom-pagination', // Custom pagination container
				}}
				onSlideChange={handleSlideChange}
				breakpoints={{
					1024: {
						// For screens 1024px and above
						slidesPerView: 2, // Show 2 slides on large screens
						spaceBetween: 30,
					},
				}}
				className="flex justify-between"
			>
				{feedbacks.map((feedback, index) => (
					<SwiperSlide key={index}>
						<div className="lg:pt-[36px] pt-[26px] w-full">
							<div className="">
								<img
									src={quote}
									alt="quotes"
									className="lg:h-12 h-8"
								/>
								<p className="lg:pt-[40px] pt-[13px] text-[#ECECEC] lg:text-[32px] text-[20px] font-bold ">
									{feedback.text}
								</p>
								<p className="text-[#B2B2B2] font-bold lg:text-[20px] text-[16px] lg:pt-[40px] pt-[13px] ">
									{feedback.subtext}
								</p>
								<div className="lg:pt-[82px] pt-[53px] ">
									<p className="text-[#ffffff] font-medium lg:text-[32px] text-[24px]">
										{feedback.name}
									</p>
									<p className="text-[16px] text-[#ffffff] font-medium">
										{feedback.role}
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* Custom pagination container */}
			<div className="custom-pagination mt-[50px]  flex justify-center lg:hidden "></div>
		</div>
	);
}
