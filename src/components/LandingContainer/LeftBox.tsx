import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import InsightBox from "./InsightBox";
import CircularProgress from "./CircularProgress";
import PercentageInsightBox from "./PercentageInsightBox";

const LeftBox = () => {
	return (
		<div className="flex flex-col px-8 pt-16 space-y-20">
			<div className="flex flex-col space-y-1">
				<div className="flex flex-row items-baseline space-x-2 ">
					<div className="text-md text-[#383874] ">All users</div>
					<div className="text-[9px] text-[#383874]">DETAIL </div>
					<FaAngleRight className="text-[7px]" />
				</div>
				<div className="text-5xl text-[#383874]">2,431,340</div>
			</div>
			<div className="flex flex-col space-y-6">
				<div>
					<InsightBox
						color="9061FF"
						count={"540,549"}
						title="Total earning"
						logo="line"
					/>
				</div>
				<div>
					<InsightBox
						color="48c7ff"
						count={"1,205,677"}
						title="Sales"
						logo="crown"
					/>
				</div>
				<div>
					<InsightBox
						color="ff8a55"
						count={"48,430,039"}
						title="Purchase"
						logo="bar"
					/>
				</div>
			</div>
			<div className="flex flex-row space-x-10">
				<PercentageInsightBox
					color="blue"
					count="92,980"
					title="Active Users"
					percentage={27}
				/>
				<PercentageInsightBox
					color="green"
					count="22,652"
					title="New Users"
					percentage={67}
				/>
			</div>
		</div>
	);
};

export default LeftBox;
