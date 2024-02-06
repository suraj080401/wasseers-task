import React from "react";

const NavbarTabs = (props: {
	activeTab: string;
	setActivTab: Function;
	title: string;
	setCurrPage: Function;
}) => {
	return (
		<div>
			<h2
				className={`${
					props.activeTab === props.title
						? "text-black border-b-2 py-[15px] border-black"
						: "text-gray-400"
				} hover:cursor-pointer hover:text-black`}
				onClick={() => {
					props.setActivTab(props.title);
					props.setCurrPage(props.title);
				}}
			>
				{props.title}
			</h2>
		</div>
	);
};

export default NavbarTabs;
