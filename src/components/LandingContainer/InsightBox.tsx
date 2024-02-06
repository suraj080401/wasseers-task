import React, { useEffect } from "react";
import { PiChartLineUpBold } from "react-icons/pi";
import { RiVipCrownLine } from "react-icons/ri";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const InsightBox = (props: {
	color: string;
	logo: string;
	title: string;
	count: string;
}) => {
	const dynamicStyle = {
		backgroundColor: `#${props.color}`,
		fontSize: "20px",
	};

	return (
		<div className="flex flex-row space-x-6">
			<div
				className={`flex items-center justify-center rounded-2xl w-12 h-12 text-white`}
				style={dynamicStyle}
			>
				{props.logo === "bar" ? <BiSolidBarChartAlt2 /> : ""}
				{props.logo === "line" ? <PiChartLineUpBold /> : ""}
				{props.logo === "crown" ? <RiVipCrownLine /> : ""}
			</div>
			<div className="flex flex-col text-[#383874]">
				<div>{props.title}</div>
				<div className="font-bold">{props.count}</div>
			</div>
		</div>
	);
};

export default InsightBox;
