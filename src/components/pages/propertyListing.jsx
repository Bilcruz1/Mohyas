import React, { useState } from 'react';
import wip from '../../assets/images/wip.jpeg';
import search_icon from '../../assets/icons/search_icon.svg';
import location_icon from '../../assets/icons/location_icon_p.svg';
import bedroom_icon from '../../assets/icons/bedroom_icon_p.svg';
import land_icon from '../../assets/icons/land_icon_p.svg';
import Achievements from '../achievements';
import Notifications from '../notifications';
import ContactUs from '../contactUs';
import house1 from '../../assets/images/house1.jpg';
import house2 from '../../assets/images/house11.jpg';
import house3 from '../../assets/images/house8.jpg';
import house4 from '../../assets/images/house13.jpg';
import house5 from '../../assets/images/house9.jpg';
import house6 from '../../assets/images/house7.jpg';

const properties = [
	{
		id: 1,
		price: '150,000',
		name: 'Lakeview Jit House',
		location: '16 AC road close 1',
		bedrooms: '4',
		size: '122 SQFT',
		bathrooms: '2',
		house: house1,
	},
	{
		id: 2,
		price: '200,000',
		name: 'Ocean View Villa',
		location: '24 BC street main road',
		bedrooms: '3',
		size: '200 SQFT',
		bathrooms: '3',
		house: house2,
	},
	{
		id: 3,
		price: '200,000',
		name: 'City Heights Apartments',
		location: '18 Beachfront Ave',
		bedrooms: '3',
		size: '180 SQFT',
		bathrooms: '2',
		house: house3,
	},
	{
		id: 4,
		price: '200,000',
		name: 'City Heights Apartments',
		location: '18 Beachfront Ave',
		bedrooms: '3',
		size: '180 SQFT',
		bathrooms: '2',
		house: house4,
	},
	{
		id: 5,
		price: '200,000',
		name: 'City Heights Apartments',
		location: '18 Beachfront Ave',
		bedrooms: '3',
		size: '180 SQFT',
		bathrooms: '2',
		house: house5,
	},
	{
		id: 6,
		price: '200,000',
		name: 'City Heights Apartments',
		location: '18 Beachfront Ave',
		bedrooms: '3',
		size: '180 SQFT',
		bathrooms: '2',
		house: house6,
	},
	// Add more properties as needed
];

export default function PropertyListing() {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredProperties, setFilteredProperties] = useState(properties);

	const handleSearch = () => {
		const filtered = properties.filter(
			property =>
				property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
				property.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
				property.name.toLowerCase().includes(searchQuery.toLowerCase()) // Added filtering by name
		);
		setFilteredProperties(filtered);
	};

	return (
		<div>
			<div className="mt-[80px] font-sans  pt-[50px] lg:px-[110px] px-[16px]">
				<h1 className="text-center font-montserrat lg:text-[40px] text-[24px] font-medium text-[#CC9933]">
					Property Listing
				</h1>
				<p className="lg:text-[20px] text-[16px] text-[#333333] leading-[32px] pt-[16px] text-center">
					Find the perfect property with our advanced search tool. Search by
					location, price range, property type, and more to discover homes that
					fit your choice.
				</p>
				<div className="flex justify-center pt-[24px]">
					<div className="flex items-center gap-[10px] bg-white rounded-lg border-[1px] border-[#C4C4C4] px-[20px] py-[12px] w-full max-w-md">
						<button onClick={handleSearch}>
							<img
								src={search_icon}
								alt="Search"
								className="w-6 h-6"
							/>
						</button>
						<input
							type="text"
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							placeholder="Search by location, property name, or size"
							className="flex-grow outline-none text-gray-700 placeholder-[#C4C4C4] text-[20px] leading-[32px]"
						/>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 grid-cols-1 gap-[40px] mt-[40px] pb-[50px]">
					{filteredProperties.map(property => (
						<div
							key={property.id}
							className="border  border-gray-300 rounded-md "
						>
							<img
								src={property.house}
								alt={property.name}
								className="w-full h-[277px] object-cover "
							/>
							<div className="p-[16px]">
								<p className="text-[16px] font-montserrat font-medium text-[#CC9933]">
									₦{property.price}
								</p>
								<p className="text-[#333333] font-montserrat pt-[5px] text-[20px] font-semibold">
									{property.name}
								</p>
								<div className="border-t-[2px] border-[#F7F4F4] mt-[14px] pt-[14px]">
									<div className="flex justify-between mb-2">
										<div className="flex items-center space-x-1">
											<img
												src={location_icon}
												alt="Location"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.location}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bedrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bedrooms} bedrooms
											</p>
										</div>
									</div>
									<div className="flex justify-between">
										<div className="flex items-center space-x-1">
											<img
												src={land_icon}
												alt="Land size"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.size}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bathrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bathrooms} bathrooms
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{filteredProperties.length === 0 && (
						<p className="text-center col-span-3 text-gray-500 mt-4">
							No properties found matching your search.
						</p>
					)}
				</div>
				<Achievements />
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-[40px] mt-[40px] pb-[50px]">
					{filteredProperties.map(property => (
						<div
							key={property.id}
							className="border  border-gray-300 rounded-md "
						>
							<img
								src={property.house}
								alt={property.name}
								className="w-full h-[277px] object-cover "
							/>
							<div className="p-[16px]">
								<p className="text-[16px] font-montserrat font-medium text-[#CC9933]">
									₦{property.price}
								</p>
								<p className="text-[#333333] font-montserrat pt-[5px] text-[20px] font-semibold">
									{property.name}
								</p>
								<div className="border-t-[2px] border-[#F7F4F4] mt-[14px] pt-[14px]">
									<div className="flex justify-between mb-2">
										<div className="flex items-center space-x-1">
											<img
												src={location_icon}
												alt="Location"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.location}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bedrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bedrooms} bedrooms
											</p>
										</div>
									</div>
									<div className="flex justify-between">
										<div className="flex items-center space-x-1">
											<img
												src={land_icon}
												alt="Land size"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.size}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bathrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bathrooms} bathrooms
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{filteredProperties.length === 0 && (
						<p className="text-center col-span-3 text-gray-500 mt-4">
							No properties found matching your search.
						</p>
					)}
				</div>
				<Notifications />
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-[40px] mt-[40px] pt-[50px] pb-[50px]">
					{filteredProperties.map(property => (
						<div
							key={property.id}
							className="border  border-gray-300 rounded-md "
						>
							<img
								src={property.house}
								alt={property.name}
								className="w-full h-[277px] object-cover "
							/>
							<div className="p-[16px]">
								<p className="text-[16px] font-montserrat font-medium text-[#CC9933]">
									₦{property.price}
								</p>
								<p className="text-[#333333] font-montserrat pt-[5px] text-[20px] font-semibold">
									{property.name}
								</p>
								<div className="border-t-[2px] border-[#F7F4F4] mt-[14px] pt-[14px]">
									<div className="flex justify-between mb-2">
										<div className="flex items-center space-x-1">
											<img
												src={location_icon}
												alt="Location"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.location}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bedrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bedrooms} bedrooms
											</p>
										</div>
									</div>
									<div className="flex justify-between">
										<div className="flex items-center space-x-1">
											<img
												src={land_icon}
												alt="Land size"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.size}
											</p>
										</div>
										<div className="flex items-center space-x-1">
											<img
												src={bedroom_icon}
												alt="Bathrooms"
												className="w-4 h-4"
											/>
											<p className="text-[14px] text-[#333333]">
												{property.bathrooms} bathrooms
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{filteredProperties.length === 0 && (
						<p className="text-center col-span-3 font-sans text-gray-500 mt-4">
							No properties found matching your search.
						</p>
					)}
				</div>
			</div>
			<div>
				<ContactUs />
			</div>
		</div>
	);
}
