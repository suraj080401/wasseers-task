import React from "react";
import { FaCaretUp } from "react-icons/fa";

interface SmallLeadsBoxProps {
	text: string;
	amount: number;
	amount2: number;
	logo: string;
	isBottomBox: boolean;
}

const SmallLeadsBox: React.FC<SmallLeadsBoxProps> = ({
	text,
	amount,
	amount2,
	logo,
	isBottomBox,
}) => {
	return (
		<div className="flex flex-row ml-8 text-xs">
			<div className="text-[#383874] w-[40%] ">{text}</div>
			<div className="text-gray-400 w-[25%]  ">{amount}</div>
			{isBottomBox ? (
				<div className="w-[35%] flex flex-row">
					<div>{amount2}</div>
					<div
						className={`${
							logo === "green"
								? "text-green-500"
								: "text-red-500 transfrom rotate-180"
						} text-lg mx-2`}
					>
						<FaCaretUp />
					</div>
				</div>
			) : (
				<div className="w-[35%]">📈📈📈📈</div>
			)}
		</div>
	);
};

export default SmallLeadsBox;
