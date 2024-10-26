import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa'; // For quote icon

const testimonials = [
	{
		quote:
			'Their success stories are a testament to our commitment to excellence.',
		author: 'Abdulbariu Hassan',
		title: 'Founder Mohyas',
	},
	{
		quote:
			'Their success stories are a testament to our commitment to excellence.',
		author: 'Abdulbariu Hassan',
		title: 'Founder Mohyas',
	},
	// Add more testimonials as needed
];

const TestimonialSlider = () => {
	const settings = {
		dots: false, // Remove if you want pagination dots
		infinite: true,
		speed: 500,
		slidesToShow: 2, // Show two slides at a time
		slidesToScroll: 1, // Scroll one slide at a time
		nextArrow: <button className="slick-next">→</button>,
		prevArrow: <button className="slick-prev">←</button>,
		responsive: [
			{
				breakpoint: 768, // Adjust for mobile
				settings: {
					slidesToShow: 1, // Show one slide on mobile
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="testimonial-slider">
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="p-8"
					>
						<div className="testimonial-content bg-black text-white p-6 rounded-lg">
							<FaQuoteLeft className="text-4xl mb-4" />
							<p className="text-xl font-semibold mb-4">{testimonial.quote}</p>
							<p className="text-gray-400">{testimonial.author}</p>
							<p className="text-gray-600">{testimonial.title}</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TestimonialSlider;
