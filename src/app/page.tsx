"use client";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HexaBinLandingPage from "@/components/LandingContainer/HexaBinLandingPage";
import BubbleChartLandingPage from "@/components/LandingContainer/BubbleChartLandingPage";

export default function Home() {
	const [currPage, setCurrPage] = useState("Page 1");
	return (
		<div className="flex flex-col h-screen">
			<Navbar currPage={currPage} setCurrPage={setCurrPage} />
			{currPage === "Page 1" ? (
				<HexaBinLandingPage />
			) : (
				<BubbleChartLandingPage />
			)}
		</div>
	);
}
