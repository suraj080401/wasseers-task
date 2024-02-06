"use client";
import React from "react";
import LeftBox from "./LeftBox";
import WorldMap from "./WorldMap";
import FooterMap from "./FooterMap";

const HexaBinLandingPage = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-row h-full">
				<div className="w-[30%]">
					<LeftBox />
				</div>
				<div className="w-[70%] ">
					<WorldMap />
				</div>
			</div>
			<div>
				<FooterMap />
			</div>
		</div>
	);
};

export default HexaBinLandingPage;
