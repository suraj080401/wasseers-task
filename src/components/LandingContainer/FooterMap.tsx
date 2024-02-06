import React from "react";
import VictoryBar from "../Charts/BarChart";

const FooterMap = () => {
	return (
		<div className="w-full h-36 px-8 pb-8">
			<div className="flex flex-row bg-white w-full h-full rounded-xl items-center px-4 shadow-md">
				<div className="flex flex-col space-y-2">
					<div className="text-sm text-[#383874]">Sales Figures</div>
					<div className="text-2xl font-bold text-[#383874]">$10,430</div>
				</div>
				<div className="w-full h-full ml-4 p-0">
					<VictoryBar />
				</div>
			</div>
		</div>
	);
};

export default FooterMap;
