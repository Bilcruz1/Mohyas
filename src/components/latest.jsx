import React from 'react';
import { useNavigate } from 'react-router-dom';
import house1 from '../assets/images/house1.jpg';
import house2 from '../assets/images/house4.jpg';
import house3 from '../assets/images/house6.jpg';
import house4 from '../assets/images/house8.jpg';
import house5 from '../assets/images/house10.jpg';
import house6 from '../assets/images/house12.jpg';

export default function Latest() {
	const navigate = useNavigate(); // Hook for routing

	const properties = [
		{
			id: 1,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house1,
		},
		{
			id: 2,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house2,
		},
		{
			id: 3,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house3,
		},
		{
			id: 4,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house4,
		},
		{
			id: 5,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house5,
		},
		{
			id: 6,
			name: 'Lakeview Jit',
			location: 'Jabi Lake Mall',
			price: 'N150,000,000',
			image: house6,
		},
	];

	return (
		<>
			<div
				className="lg:px-[110px] px-[16px] lg:mt-[90px] mt-[24px] pb-[90px]"
				id="property"
			>
				<div className="w-full">
					<h1 className="text-[#CC9933] lg:text-[40px] text-[24px] font-cabinet-bold font-bold w-full text-center">
						Latest from Mohyaz
					</h1>
					<p className="pt-[16px] lg:px-[234px] px-[16px] text-[#333333] lg:text-[20px] text-[16px] leading-[32px] text-center font-sans">
						Discover our top-rated properties handpicked for their exceptional
						quality and prime locations. Click on any listing to explore further
						details and schedule a visit.
					</p>
				</div>
				<div className="w-full lg:pt-[56px] pt-[24px]">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[40px] gap-[24px]">
						{properties.map(property => (
							<div
								key={property.id}
								className="bg-white rounded-lg"
							>
								<img
									className="w-full"
									src={property.image}
									alt={property.name}
								/>
								<div className="flex justify-between">
									<div>
										<h3 className="text-[20px] text-[#333333] font-cabinet-medium font-medium">
											{property.name}
										</h3>
										<p className="text-[#666666] text-[16px] font-cabinet-regular">
											{property.location}
										</p>
									</div>
									<div>
										<p className="text-[24px] text-[#000000] font-cabinet-bold font-bold mt-2">
											{property.price}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="flex justify-center lg:mt-[56px] mt-[24px]">
						<button
							className="bg-[#CC9933] text-white py-[16px] px-[110px] rounded-lg font-cabinet-bold font-bold"
							onClick={() => navigate('/property-listing')}
						>
							Explore more
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
