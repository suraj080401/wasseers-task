import React from "react";
import { RiCopperDiamondLine } from "react-icons/ri";

interface ProgressConcentricCircleProps {
	progress: number;
	radiusprop: number;
	color1: string;
	color2: string;
}

const ProgressConcentricCircle: React.FC<ProgressConcentricCircleProps> = ({
	progress,
	radiusprop,
	color1,
	color2,
}) => {
	const strokeWidthOuter = 8;
	const strokeWidthInner = 4;

	const radius = radiusprop;
	const circumference = 2 * Math.PI * radius;

	const dashOffset = circumference - (progress / 100) * circumference;

	return (
		<div className="relative">
			<div className="transform rotate-[-90deg]">
				<svg width="150" height="150" viewBox="0 0 120 120">
					<circle
						cx="60"
						cy="60"
						r={radius}
						fill="none"
						strokeWidth={strokeWidthInner}
						stroke="#ddd"
					/>
					<circle
						cx="60"
						cy="60"
						r={radius}
						fill="none"
						strokeWidth={strokeWidthOuter}
						stroke={color2}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={dashOffset}
						strokeLinecap="round"
					/>
					<circle
						cx="60"
						cy="60"
						r={radius}
						fill="none"
						strokeWidth={strokeWidthOuter}
						stroke={color1}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={dashOffset + 150}
						strokeLinecap="round"
					/>
				</svg>
			</div>
			<div className="absolute top-[50px] left-[52px] rounded-full text-2xl text-[#9061FF] w-12 h-12 bg-gray-100 text-center p-3">
				<RiCopperDiamondLine />
			</div>
		</div>
	);
};

export default ProgressConcentricCircle;
