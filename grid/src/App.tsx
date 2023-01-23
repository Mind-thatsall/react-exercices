import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const grid = [
		[0, 0],
		[1, 1],
	];

	const [revealCard, setRevealCard] = useState(() => {
		return Array(grid.length)
			.fill("")
			.map(() => new Array(grid[0].length).fill(false));
	});

	type Cell = {
		row: number;
		col: number;
	};

	const [previousClick, setPreviousClick] = useState<Cell | undefined>();

	function handleRevealCard(rowIndex: number, colIndex: number) {
		const revealedCard = [...revealCard];
		revealedCard[rowIndex][colIndex] = true;
		setRevealCard(revealedCard);
		if (previousClick) {
			if (
				grid[previousClick.row][previousClick.col] !== grid[rowIndex][colIndex]
			) {
				setTimeout(() => {
					revealedCard[rowIndex][colIndex] = false;
					revealedCard[previousClick.row][previousClick.col] = false;
					setRevealCard([...revealCard]);
				}, 1000);
			}

			setPreviousClick(undefined);
		} else {
			setPreviousClick({
				row: rowIndex,
				col: colIndex,
			});
		}

		const hasWon = revealCard.flat().every((element) => element);

		if (hasWon) {
			setTimeout(() => {
				alert("YOU WON");
			});
		}
	}

	type Point = {
		x: number;
		y: number;
	};

	const [circles, setCircles] = useState<Point[]>([]);
	const [oldCircles, setOldCircles] = useState<Point[]>([]);

	function handleClickWindow(e) {
		setCircles([
			...circles,
			{
				x: e.clientX,
				y: e.clientY,
			},
		]);
	}

	function handleUndo() {
    if(circles.length === 0) return;

		const allCircles = [...circles];
    const popped = allCircles.pop()
    setOldCircles([...oldCircles, popped]);
		setCircles(allCircles);
	}

	function handleRedo() {
    if(oldCircles.length === 0) return;
		const allOldCircles = [...oldCircles];
    const popped = oldCircles.pop();

    const allCircles = [...circles];
    allCircles.push(popped)
    allOldCircles.pop();
    
		setCircles(allCircles);
    setOldCircles(allOldCircles)
	}

	return (
		<>
			<button className="undo" onClick={handleRedo}>
				Redo
			</button>
			<button className="undo" onClick={handleUndo}>
				Undo
			</button>
			<div className="fullPage" onClick={handleClickWindow}>
				{circles.map((circle, circleIndex) => (
					<div
						key={circleIndex}
						className="circle"
						style={{ left: circle.x, top: circle.y }}></div>
				))}

				<div className="App">
					<div className="grid">
						{grid.map((row, rowIndex) => (
							<div key={rowIndex} className="row">
								{row.map((number, colIndex) => (
									<div
										key={colIndex}
										className="card"
										onClick={() => handleRevealCard(rowIndex, colIndex)}>
										{revealCard[rowIndex][colIndex] ? number : ""}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
