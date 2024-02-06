import React from "react";
import { VictoryChart } from "victory-chart";
import { VictoryScatter } from "victory-scatter";
import { VictoryLegend, VictoryAxis, VictoryLabel } from "victory";

const BubbleScatter = () => {
	const dataSet = [
		{ x: "Jan", y: 300, size: 10, value: "sales" },
		{ x: "Feb", y: 500, size: 5, value: "sales" },
		{ x: "Mar", y: 650, size: 8, value: "users" },
		{ x: "Apr", y: 450, size: 40, value: "product" },
		{ x: "May", y: 250, size: 25, value: "users" },
		{ x: "Jun", y: 600, size: 60, value: "team" },
		{ x: "Jul", y: 200, size: 7, value: "sales" },
		{ x: "Aug", y: 500, size: 7, value: "team" },
		{ x: "Sep", y: 600, size: 5, value: "sales" },
		{ x: "Oct", y: 400, size: 40, value: "users" },
		{ x: "Nov", y: 200, size: 20, value: "team" },
		{ x: "Dec", y: 100, size: 3, value: "product" },
	];

	function getColorBasedOnX(x: string) {
		switch (x) {
			case "sales":
				return "#B155F0";
			case "team":
				return "#763CFF";
			case "product":
				return "#FF6275";
			case "users":
				return "#FAEC00";
			default:
				return "#FFFFFF";
		}
	}

	return (
		<div>
			<VictoryChart domain={{ y: [0, 1000] }} width={600}>
				<VictoryAxis
					style={{
						grid: { stroke: "lightgray" },
						axis: { stroke: "lightgray" },
						tickLabels: { fill: "lightgray", fontSize: 10 },
					}}
					domain={[0, 4]}
				/>
				<VictoryAxis
					dependentAxis
					style={{
						grid: { stroke: "white" },
						axis: { stroke: "lightgray" },
						tickLabels: { fill: "lightgray", fontSize: 10 },
					}}
				/>
				<VictoryLegend
					x={250}
					orientation="horizontal"
					titleOrientation="left"
					title={"Sales Figure"}
					gutter={20}
					style={{
						labels: { fontSize: 10 },
						title: { fontSize: 13, fontWeight: 600 },
					}}
					colorScale={["#B155F0", "#FAEC00", "#FF6275", "#763CFF"]}
					data={[
						{ name: "Sales" },
						{ name: "Users" },
						{ name: "Product" },
						{ name: "Team" },
					]}
					titleComponent={<VictoryLabel dx={-240} />}
				/>
				<VictoryScatter
					style={{
						data: {
							fill: ({ datum }) => getColorBasedOnX(datum.value),
							opacity: 0.8,
						},
						labels: {
							fill: "white",
							fontFamily: "Arial, sans-serif",
							fontSize: 10,
						},
					}}
					labels={({ datum }) => (datum.size >= 30 ? `$ ${datum.y}00` : "")}
					labelComponent={<VictoryLabel dy={6} />}
					data={dataSet}
				/>
			</VictoryChart>
		</div>
	);
};

export default BubbleScatter;
