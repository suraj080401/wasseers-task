import React from "react";
import ProgressConcentricCircle from "./ProgressConcentricCircle";
import LeadsBox from "./LeadsBox";
import SmallLeadsBox from "./SmallLeadsBox";

const LeftInsightBox = () => {
	return (
		<div className="w-full h-full p-4 flex flex-col space-y-8">
			<div className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
				<div className="w-36 h-36 flex flex-row items-center justify-center ">
					<div className="flex justify-center items-center relative">
						<div className="absolute">
							<ProgressConcentricCircle
								progress={90}
								radiusprop={30}
								color1={""}
								color2={"#FFBA54"}
							/>
						</div>
						<div className="absolute">
							<ProgressConcentricCircle
								progress={60}
								radiusprop={50}
								color1={"#9061FF"}
								color2={"#FF5F85"}
							/>
						</div>
					</div>
				</div>
				<LeadsBox
					amount={12875}
					percentageInc={"2%"}
					prevAmount={21504}
					text={"Total Earning"}
					isCentered={true}
				/>
				<div className="flex flex-col mt-4 w-full space-y-2">
					<SmallLeadsBox
						text="Presentation"
						amount={862}
						amount2={0}
						logo=""
						isBottomBox={false}
					/>
					<SmallLeadsBox
						text="Development"
						amount={782}
						amount2={0}
						logo=""
						isBottomBox={false}
					/>
					<SmallLeadsBox
						text="Research"
						amount={452}
						amount2={0}
						logo=""
						isBottomBox={false}
					/>
				</div>
			</div>
			<div className="flex flex-col w-full text-left bg-[#9061FF] rounded-lg py-2 px-4 shadow-md">
				<LeadsBox
					amount={12875}
					percentageInc={"2%"}
					prevAmount={21504}
					text={"Total Earning"}
					isCentered={false}
				/>
				<hr className="border-t border-gray-600 w-full mt-2" />
				<LeadsBox
					amount={43123}
					percentageInc={"2%"}
					prevAmount={21504}
					text={"Sales"}
					isCentered={false}
				/>
			</div>
			<div className="flex flex-col w-full text-left bg-white space-y-2 rounded-lg p-2 shadow-md">
				<SmallLeadsBox
					text="Travel"
					amount={750}
					amount2={5430}
					logo="green"
					isBottomBox={true}
				/>
				<SmallLeadsBox
					text="Presentation"
					amount={842}
					amount2={3450}
					logo="red"
					isBottomBox={true}
				/>
				<SmallLeadsBox
					text="Bussines"
					amount={362}
					amount2={2340}
					logo="green"
					isBottomBox={true}
				/>
			</div>
		</div>
	);
};

export default LeftInsightBox;
