import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-scroll';
import video_source from '../assets/video/Mohyas.mp4';
import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function HeroSection() {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	const handlePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div
			className="bg-[url('/src/assets/images/homepage.jpg')] relative lg:min-h-[1050px] font-montserrat  lg:bg-cover bg-bottom bg-no-repeat"
			id="home"
		>
			<section className="lg:pt-[100px] pt-[90px] flex flex-col justify-center items-center h-full">
				<div className="text-center lg:mb-[32px] mb-[20px]">
					<h1 className="lg:text-[64px] text-[24px] text-[#ffffff] lg:pt-[64px] pt-[40px] font-extrabold lg:px-[250px] px-[30px]">
						Discover Your Dream Home With Mohyas Prime Estate
					</h1>
					<p className="text-[#ffffff] lg:text-[24px] text-[16px] font-medium pt-[24px]  lg:px-[0px] px-[10px]">
						Explore Exclusive Properties with MohyasPrime Estate
					</p>

					<div className="flex justify-center space-x-[32px] lg:mt-[48px] mt-[24px] mb-[24px] lg:px-[0px] px-[30px]">
						<Link
							className="rounded-md hover:cursor-pointer bg-[#CC9933] text-[#1B1B1B] px-[30px] py-[12px] text-[16px] font-cabinet-bold font-bold"
							to="contact"
							duration={500}
							smooth={true}
							offset={-70}
						>
							Contact Us
						</Link>
						<Link
							className="rounded-md hover:cursor-pointer bg-[#1B1B1B] text-[#ffffff] border border-[#ffffff] px-[30px] py-[12px] text-[16px] font-cabinet-bold font-bold"
							to="contact"
							duration={500}
							smooth={true}
							offset={-70}
						>
							Learn more
						</Link>
					</div>
				</div>
				{/* Image is now part of the flow */}
				<div className="lg:mt-[48px] lg:-mb-[96px] relative -mb-[150px] mt-[32px] w-full lg:px-[110px] px-[22px]">
					<video
						ref={videoRef}
						src={video_source} // Replace with your video source
						className="w-full object-cover rounded-2xl lg:h-[656px] h-[297px]"
						muted
						autoPlay
						loop
					>
						Your browser does not support the video tag.
					</video>
					<div
						onClick={handlePlayPause}
						className="absolute inset-0 lg:hidden flex items-center justify-center cursor-pointer"
					>
						{isPlaying ? (
							<FaPause className="text-white text-4xl lg:text-6xl" />
						) : (
							<FaPlay className="text-white text-4xl lg:text-6xl" />
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
