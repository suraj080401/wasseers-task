import React from "react";
import { VictoryBar } from "victory-bar";

const BarChart = () => {
	function generateDataArray(): { x: number; y: number }[] {
		const dataArray: { x: number; y: number }[] = [];

		for (let i = 1; i <= 75; i++) {
			const randomY = Math.floor(Math.random() * (10 - 5 + 1)) + 1;
			dataArray.push({ x: i, y: randomY });
		}

		return dataArray;
	}

	const data = generateDataArray();

	return (
		<div className="h-full relative">
			<VictoryBar
				style={{
					data: {
						fill: ({ datum }) =>
							datum.x > 25 && datum.x < 40 ? "#FF5F85" : "#DBDEF3",
					},
				}}
				width={4000}
				barWidth={50}
				cornerRadius={8}
				data={data}
			/>
			<div className="w-[96%] mx-auto absolute inset-x-0 bottom-[18px] flex flex-row ">
				<div className="h-[5px] w-[20%] rounded-l-full bg-[#FFA500] "></div>
				<div className="h-[5px] w-[30%]  bg-[#FF5F85] "></div>
				<div className="h-[5px] w-[50%] rounded-r-full bg-[#9061FF] "></div>
			</div>
		</div>
	);
};

export default BarChart;
