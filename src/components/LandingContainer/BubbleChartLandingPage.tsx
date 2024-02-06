import React from "react";
import LeftInsightBox from "./LeftInsightBox";
import BubbleScatter from "../Charts/BubbleScatter";

const BubbleChartLandingPage = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-row h-full">
				<div className="w-[25%]  p-2">
					<LeftInsightBox />
				</div>
				<div className="w-[75%] py-20 px-8 bg-gray-200 rounded-l-[50px]">
					<BubbleScatter />
				</div>
			</div>
		</div>
	);
};

export default BubbleChartLandingPage;
