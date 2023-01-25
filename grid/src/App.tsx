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
				}, 250);
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

	return (
		<>
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
		</>
	);
}

export default App;
