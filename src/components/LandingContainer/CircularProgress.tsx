import React from "react";

interface CircularProgressProps {
	percentage: number;
	color: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
	percentage,
	color,
}) => {
	const dynamicStyle = {
		stroke: color,
		transformOrigin: "center",
	};
	const strokeWidth = 6;
	const radius = 50 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg className="transform " width="70" height="70" viewBox="0 0 100 100">
			<circle
				className="fill-none stroke-gray-300 stroke-current"
				r={radius}
				cx="50"
				cy="50"
				strokeWidth={strokeWidth}
			/>
			<circle
				className={`fill-none stroke-current transition-transform transform rotate-[-90deg]`}
				style={dynamicStyle}
				r={radius}
				cx="50"
				cy="50"
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
			/>
			<text
				className="text-gray-700 text-lg"
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
			>
				{percentage}%
			</text>
		</svg>
	);
};

export default CircularProgress;
