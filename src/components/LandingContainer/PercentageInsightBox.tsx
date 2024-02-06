import React from "react";
import CircularProgress from "./CircularProgress";

interface PercentageInsightBoxProps {
	count: string;
	color: string;
	title: string;
	percentage: number;
}

const PercentageInsightBox: React.FC<PercentageInsightBoxProps> = ({
	count,
	color,
	title,
	percentage,
}) => {
	return (
		<div className="flex flex-row">
			<div className="flex flex-row items-center space-x-4">
				<CircularProgress percentage={percentage} color={color} />
				<div className="flex flex-col">
					<div className="text-sm">{count}</div>
					<div className="text-xs">{title}</div>
				</div>
			</div>
		</div>
	);
};

export default PercentageInsightBox;
