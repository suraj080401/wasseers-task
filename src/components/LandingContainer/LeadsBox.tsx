import React from "react";
import { FaCaretUp } from "react-icons/fa";

interface LeadsBoxProps {
	text: string;
	amount: number;
	percentageInc: string;
	prevAmount: number;
	isCentered: boolean;
}

const LeadsBox: React.FC<LeadsBoxProps> = ({
	text,
	amount,
	percentageInc,
	prevAmount,
	isCentered,
}) => {
	return (
		<div>
			<div className={`flex flex-col ${isCentered ? "items-center" : ""}`}>
				<div
					className={`text-lg mt-2 ${
						isCentered ? "text-[#383874]" : "text-white"
					}`}
				>
					{text}
				</div>
				<div className="flex flex-row">
					<div
						className={`${
							isCentered ? "text-[#383874] font-bold " : "text-white text-2xl"
						}`}
					>
						${amount}
					</div>
					<div className="text-green-400 flex flex-row items-end text-xs">
						<div>
							<FaCaretUp className="text-lg" />
						</div>
						<div className="text-green-400">{percentageInc}</div>
					</div>
				</div>
				<div
					className={`text-[9px] ${
						isCentered ? "text-gray-400" : "text-white"
					}`}
				>
					{`Compared to $${prevAmount} last year`}
				</div>
			</div>
		</div>
	);
};

export default LeadsBox;
