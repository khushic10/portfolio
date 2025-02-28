import { useEffect, useState } from "react";
import { crossPoints } from "../constants/crossPoints";
import { validMoves } from "../constants/validMoves";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage"; // Import the custom hook

const useBoard = (initialTigerPositions, initialGoatPositions) => {
	const [tigerPositions, setTigerPositions] = useLocalStorage(
		"tigerPositions",
		initialTigerPositions
	);
	const [goatPositions, setGoatPositions] = useLocalStorage(
		"goatPositions",
		initialGoatPositions
	);
	const [turn, setTurn] = useLocalStorage("turn", "goat");
	const [goatCount, setGoatCount] = useLocalStorage("goatCount", 0);
	const [goatKill, setGoatKill] = useLocalStorage("goatKill", 0);
	const [gameStatus, setGameStatus] = useLocalStorage("gameStatus", "ongoing");
	const [selectedIcon, setSelectedIcon] = useState("");
	const [selectedPosition, setSelectedPosition] = useState(null);

	const isValidMove = (selected, target, icon) => {
		const selectedId = crossPoints.findIndex(
			(point) => point.x === selected.x && point.y === selected.y
		);
		const targetId = crossPoints.findIndex(
			(point) => point.x === target.x && point.y === target.y
		);

		if (validMoves[selectedId]?.includes(targetId)) {
			return true;
		} else if (icon === "tiger") {
			for (let move of validMoves[selectedId]) {
				const midPoint = crossPoints[move];
				const isGoat = goatPositions.some(
					(g) => g.x === midPoint.x && g.y === midPoint.y
				);

				const midId = crossPoints.findIndex(
					(point) => point.x === midPoint.x && point.y === midPoint.y
				);

				if (isGoat && validMoves[midId]?.includes(targetId)) {
					const isEmpty =
						!tigerPositions.some((t) => t.x === target.x && t.y === target.y) &&
						!goatPositions.some((g) => g.x === target.x && g.y === target.y);

					if (isEmpty) {
						const dx1 = midPoint.x - selected.x;
						const dy1 = midPoint.y - selected.y;
						const dx2 = target.x - midPoint.x;
						const dy2 = target.y - midPoint.y;

						const isStraightLine =
							(dx1 === dx2 && dy1 === dy2) || (dx1 === -dx2 && dy1 === -dy2);

						if (isStraightLine) {
							return true;
						}
					}
				}
			}
		}
		return false;
	};

	const removeGoat = (from, to) => {
		const selectedId = crossPoints.findIndex(
			(point) => point.x === from.x && point.y === from.y
		);
		const targetId = crossPoints.findIndex(
			(point) => point.x === to.x && point.y === to.y
		);

		for (let move of validMoves[selectedId]) {
			const midPoint = crossPoints[move];
			const isGoat = goatPositions.some(
				(g) => g.x === midPoint.x && g.y === midPoint.y
			);

			const midId = crossPoints.findIndex(
				(point) => point.x === midPoint.x && point.y === midPoint.y
			);

			if (isGoat && validMoves[midId]?.includes(targetId)) {
				const dx1 = midPoint.x - from.x;
				const dy1 = midPoint.y - from.y;
				const dx2 = to.x - midPoint.x;
				const dy2 = to.y - midPoint.y;

				const isStraightLine =
					(dx1 === dx2 && dy1 === dy2) || (dx1 === -dx2 && dy1 === -dy2);

				if (isStraightLine) {
					setGoatPositions((prev) =>
						prev.filter((g) => !(g.x === midPoint.x && g.y === midPoint.y))
					);
					setGoatKill((prev) => prev + 1);
				}
			}
		}
	};

	const moveIcon = (icon, from, to) => {
		if (isValidMove(from, to, icon)) {
			if (icon === "tiger") {
				setTigerPositions((prev) =>
					prev.map((t) => (t.x === from.x && t.y === from.y ? to : t))
				);
				removeGoat(from, to);
			} else if (icon === "goat") {
				setGoatPositions((prev) =>
					prev.map((g) => (g.x === from.x && g.y === from.y ? to : g))
				);
			}
			setTurn(icon === "tiger" ? "goat" : "tiger");
		} else {
			toast.warn("Invalid Move!");
		}
	};

	const handleIconClick = (point, icon) => {
		if (gameStatus !== "ongoing") {
			toast.error("Game over. Please reset the game.");
			return;
		}
		if (icon === turn) {
			if (icon === "goat" && goatCount < 20) {
				toast.warn("You cannot move goat unless you add all 20 goats");
			} else {
				setSelectedIcon(icon);
				setSelectedPosition(point);
			}
		} else {
			toast.warn("Not your Turn");
		}
	};

	const handlePointClick = (targetPoint) => {
		if (gameStatus !== "ongoing") {
			toast.error("Game over. Please reset the game.");
			return;
		}

		if (selectedIcon && selectedPosition) {
			moveIcon(selectedIcon, selectedPosition, targetPoint);
			setSelectedIcon("");
			setSelectedPosition(null);
		} else if (turn === "goat" && goatCount < 20) {
			setGoatPositions((prev) => [...prev, targetPoint]);
			setGoatCount((prev) => prev + 1);
			setTurn("tiger");
		}
	};

	const isPointOccupied = (point) => {
		return (
			tigerPositions.some((t) => t.x === point.x && t.y === point.y) ||
			goatPositions.some((g) => g.x === point.x && g.y === point.y)
		);
	};

	const checkWinCondition = () => {
		if (goatKill >= 5) {
			setGameStatus("tiger_wins");
			toast.success("Tiger wins!");
		} else {
			const canAnyTigerMove = tigerPositions.some((tiger) =>
				validMoves[
					crossPoints.findIndex((p) => p.x === tiger.x && p.y === tiger.y)
				].some((moveId) => !isPointOccupied(crossPoints[moveId]))
			);
			if (!canAnyTigerMove) {
				setGameStatus("goat_wins");
				toast.success("Goat wins!");
			}
		}
	};

	useEffect(() => {
		checkWinCondition();
	}, [goatPositions, tigerPositions]);

	return {
		tigerPositions,
		setTigerPositions,
		goatPositions,
		setGoatPositions,
		crossPoints,
		turn,
		setTurn,
		goatCount,
		setGoatCount,
		goatKill,
		setGoatKill,
		gameStatus,
		setGameStatus,
		handleIconClick,
		handlePointClick,
	};
};

export default useBoard;
