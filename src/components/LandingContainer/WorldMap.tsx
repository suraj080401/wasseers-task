import React from "react";
import Image from "next/image";
import hexmap from "../../images/Hexmap.png";

const WorldMap = () => {
	return (
		<div className="pt-8">
			<Image src={hexmap} alt="map" width={900} height={900} />
		</div>
	);
};

export default WorldMap;
