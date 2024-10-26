import React from 'react';
import Slider from 'react-slick';
import quote from '../assets/icons/quote.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Feedbacks.css'; // Custom CSS for styling

// Custom next arrow component
const NextArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow custom-next`}
			style={{ ...style }}
			onClick={onClick}
		>
			→
		</div>
	);
};

// Custom previous arrow component
const PrevArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow custom-prev`}
			style={{ ...style }}
			onClick={onClick}
		>
			←
		</div>
	);
};

export default function Feedbacks() {
	const settings = {
		dots: true, // Enable dots for navigation
		infinite: true, // Infinite scrolling of slides
		speed: 500, // Transition speed
		slidesToShow: 2, // Show two slides at a time
		slidesToScroll: 2, // Scroll two slides at a time
		nextArrow: <NextArrow />, // Use custom next arrow
		prevArrow: <PrevArrow />, // Use custom previous arrow
		responsive: [
			{
				breakpoint: 768, // For mobile viewports
				settings: {
					slidesToShow: 1, // Show 1 slide at a time on smaller screens
					slidesToScroll: 1, // Scroll 1 slide at a time on smaller screens
				},
			},
		],
	};

	return (
		<div>
			<div className="bg-[#191919] px-[110px] font-cabinet-bold py-[90px]">
				<p className="text-[#CC9933] text-[40px] w-[30%] leading-[60px]">
					What Our Customer Say About Us
				</p>
				<Slider
					{...settings}
					className="pt-[36px] flex slider-container"
				>
					<div className="pr-[41px]">
						<div>
							<img
								src={quote}
								alt="quotes"
								className="h-12"
							/>
							<p className="pt-[40px] text-[#ECECEC] text-[32px] font-bold">
								Their success stories are a testament to our commitment to
								excellence.
							</p>
							<p className="text-[#B2B2B2] font-bold text-[20px] pt-[40px]">
								Hear from our satisfied clients who have found their dream homes
								through us.
							</p>
							<div className="pt-[82px]">
								<p className="text-[#ffffff] font-medium text-[32px]">
									Abdulbariu Hassan
								</p>
								<p className="text-[16px] text-[#ffffff] font-medium">Client</p>
							</div>
						</div>
					</div>

					<div className="pl-[41px]">
						<div>
							<img
								src={quote}
								alt="quotes"
								className="h-12"
							/>
							<p className="pt-[40px] text-[#ECECEC] text-[32px] font-bold">
								Their success stories are a testament to our commitment to
								excellence.
							</p>
							<p className="text-[#B2B2B2] font-bold text-[20px] pt-[40px]">
								Hear from our satisfied clients who have found their dream homes
								through us.
							</p>
							<div className="pt-[82px]">
								<p className="text-[#ffffff] font-medium text-[32px]">
									Abdulbariu Hassan
								</p>
								<p className="text-[16px] text-[#ffffff] font-medium">Client</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}
