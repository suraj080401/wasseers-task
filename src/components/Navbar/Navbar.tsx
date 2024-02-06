"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../images/wstf-logo.png";
import { Input } from "@/components/ui/input";
import { FiUser } from "react-icons/fi";
import { RiListSettingsLine } from "react-icons/ri";
import NavbarTabs from "./NavbarTabs";
import { CiSearch } from "react-icons/ci";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import BubbleScatter from "../Charts/BubbleScatter";

interface NavBarProps {
	currPage: string;
	setCurrPage: Function;
}

const Navbar: React.FC<NavBarProps> = ({ currPage, setCurrPage }) => {
	const [activeTab, setActivTab] = useState(currPage);

	return (
		<div className="flex flex-row w-full bg-white h-12 justify-between px-8 items-center">
			<div className="flex flex-row items-center space-x-2">
				<div>
					<Image src={logo} alt="Logo" height={30} width={30} />
				</div>
				<div>WASSERSTOFF</div>
			</div>
			<div className="flex flex-row items-center space-x-10 text-sm">
				<div className="relative flex items-center">
					<Input className="h-6 focus-visible:ring-1 w-96 bg-[#eeeffb]" />
					<div className="absolute right-2 cursor-pointer text-lg text-gray-400">
						<CiSearch />
					</div>
				</div>
				<NavbarTabs
					activeTab={activeTab}
					setActivTab={setActivTab}
					setCurrPage={setCurrPage}
					title="Page 1"
				/>
				<NavbarTabs
					activeTab={activeTab}
					setActivTab={setActivTab}
					setCurrPage={setCurrPage}
					title="Page 2"
				/>
				<NavbarTabs
					activeTab={activeTab}
					setActivTab={setActivTab}
					setCurrPage={setCurrPage}
					title="Dashboard"
				/>
				<NavbarTabs
					activeTab={activeTab}
					setActivTab={setActivTab}
					setCurrPage={setCurrPage}
					title="Analytics"
				/>
				<Popover>
					<PopoverTrigger className="bg-red-300 py-1 px-2 rounded-lg">
						Open Bubble Chart
					</PopoverTrigger>
					<PopoverContent className="w-[800px] mr-[300px] mt-16 pt-10 text-wrap">
						<BubbleScatter />
					</PopoverContent>
				</Popover>
			</div>

			<div className="flex flex-row space-x-4">
				<FiUser className="text-xl text-gray-400 hover:text-black" />
				<RiListSettingsLine className="text-xl text-gray-400 hover:text-black" />
			</div>
		</div>
	);
};

export default Navbar;
