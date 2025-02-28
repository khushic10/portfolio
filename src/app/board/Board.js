"use client";
import React, { useState, useEffect } from "react";
import "./Board.scss";
import { GiTigerHead } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";
import useBoard from "../../hooks/useBoard";
import SvgLines from "./SvgLines";
import { ToastContainer } from "react-toastify";

const Board = ({ initialGoatPositions, initialTigerPositions }) => {
	const {
		tigerPositions = [],
		setTigerPositions,
		goatPositions = [],
		setGoatPositions,
		crossPoints = [],
		turn,
		setTurn,
		setGoatCount,
		setGoatKill,
		setGameStatus,
		handleIconClick,
		handlePointClick,
	} = useBoard(initialTigerPositions, initialGoatPositions);

	const [selectedIconId, setSelectedIconId] = useState(null);
	const [isClient, setIsClient] = useState(false);
	const [showRules, setShowRules] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false); // State for modal

	useEffect(() => {
		setIsClient(true); // Only render after the client has loaded
	}, []);

	if (!isClient) return null; // Prevents hydration mismatch

	const handleClick = (point, type) => {
		handleIconClick(point, type);
		setSelectedIconId(point.id);
	};

	const handleOtherPointClick = (point) => {
		handlePointClick(point);
		setSelectedIconId(null);
	};

	const handleResetClick = () => {
		setTigerPositions(initialTigerPositions);
		setGoatPositions(initialGoatPositions);
		setTurn("goat");
		setGoatCount(0);
		setGoatKill(0);
		setGameStatus("ongoing");
		setShowConfirm(false);
	};

	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={1600}
				hideProgressBar="false"
				pauseOnHover="true"
			/>
			{showRules && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
						<h2 className="text-xl font-bold mb-4">Baagh-Chaal Rules</h2>
						<ul className="space-y-2 text-gray-700">
							<li>🦁 Players: One plays 4 tigers, the other plays 20 goats.</li>
							<li>
								🎯 Objective:
								<ul className="list-[circle] list-inside ml-4">
									<li>Tigers must capture 5 goats to win.</li>
									<li>Goats must block all 4 tigers from moving.</li>
								</ul>
							</li>
							<li>
								📍 Setup: Tigers start at four corners, goats are placed one by
								one.
							</li>
							<li>
								🔄 Movement:
								<ul className="list-[circle] list-inside ml-4">
									<li>Tigers move one step in any direction.</li>
									<li>
										After all 20 goats are placed, they can also move one step.
									</li>
								</ul>
							</li>
							<li>
								🦁 Tiger Captures:
								<ul className="list-[circle] list-inside ml-4">
									<li>Tigers jump over goats to capture them.</li>
									<li>Tigers cannot jump over another tiger.</li>
								</ul>
							</li>
							<li>
								🏆 Winning:
								<ul className="list-[circle] list-inside ml-4">
									<li>Tigers win if they capture 5 goats.</li>
									<li>Goats win if they trap all tigers.</li>
								</ul>
							</li>
						</ul>
						<div className="mt-4 flex justify-end">
							<button
								onClick={() => setShowRules(false)}
								className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
			{showConfirm && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
						<h2 className="text-xl font-bold mb-4">
							The current progress will be lost. Would you like to continue?
						</h2>
						<div className="mt-4 flex justify-end">
							<button
								onClick={() => handleResetClick()}
								className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
							>
								New Game
							</button>
							<button
								onClick={() => setShowConfirm(false)}
								className="px-4 py-2 bg-white text-red rounded-md hover:bg-gray-50"
							>
								cancel
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="board-container">
				<div>
					<svg
						viewBox="0 0 315 200"
						className="board-svg"
						style={{
							backgroundImage: `url('https://media.istockphoto.com/id/879557220/photo/green-grass-texture-background.jpg?s=612x612&w=0&k=20&c=uDJijCOP3jOZd_Y9LxkMkRWJYjUXNPOGGrIAPhpU4AU=')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						<SvgLines />
						{crossPoints.length > 0 &&
							crossPoints.map((point, index) => (
								<g key={index} onClick={() => handleOtherPointClick(point)}>
									<circle
										cx={point.x}
										cy={point.y}
										r="5"
										fill="red"
										opacity={0}
									/>
								</g>
							))}

						{tigerPositions &&
							tigerPositions.map((point, index) => (
								<g
									key={index}
									onClick={() => handleClick(point, "tiger")}
									style={{ cursor: "pointer" }}
								>
									<circle
										cx={point.x + 1}
										cy={point.y + 1}
										r="11"
										fill="white"
										stroke={
											selectedIconId === point.id && turn === "tiger"
												? "orange"
												: "white"
										}
										strokeWidth={selectedIconId === point.id ? 2 : 1}
									/>
									<g transform={`translate(${point.x - 9}, ${point.y - 9})`}>
										<GiTigerHead size={20} style={{ color: "#fd6a02" }} />
									</g>
								</g>
							))}

						{goatPositions &&
							goatPositions.map((point, index) => (
								<g key={index} onClick={() => handleClick(point, "goat")}>
									<circle
										cx={point.x - 1}
										cy={point.y}
										r="10"
										fill="white"
										stroke={
											selectedIconId === point.id && turn === "goat"
												? "orange"
												: "white"
										}
										strokeWidth={selectedIconId === point.id ? 2 : 1}
									/>
									<g transform={`translate(${point.x - 9}, ${point.y - 9})`}>
										<GiGoat size={16} style={{ color: "#876769" }} />
									</g>
								</g>
							))}
					</svg>
				</div>
				<div className="flex gap-4 flex-col bg-gray-300">
					<div className="flex items-center justify-center font-bold text-green-900 text-3xl mt-2">
						Bagh-Chal
					</div>
					<button
						onClick={() => setShowConfirm(true)}
						className="mx-4 mt-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
					>
						New Game
					</button>

					{/* Game Rules Button */}
					<button
						onClick={() => setShowRules(true)}
						className="mx-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
					>
						Game Rules
					</button>
					<div className="p-6 text-green-800 font-semibold text-lg ">
						Created by{" "}
						<div className="text-xl text-red-900">Khushi Chaudhary</div>{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default Board;
