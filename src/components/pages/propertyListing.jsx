import React from 'react';
import wip from '../../assets/images/wip.jpeg';

export default function PropertyListing() {
	return (
		<div className="bg-gray-400">
			<h1>Property Listing</h1>
			<div className="w-full">
				<img
					src={wip}
					alt="wip"
					className="w-full h-full object-cover lg:rounded-lg"
				/>
			</div>
		</div>
	);
}
