import { useState } from "react";
import "./App.css";

function App() {
	type Point = {
		x: number;
		y: number;
	};

	const [points, setPoints] = useState<Point[]>([]);
  const [lastPoints, setLastPoints] = useState<Point[]>([]);

	function addCircle(e: { clientX: number; clientY: number }) {
		const newPoint = { x: e.clientX, y: e.clientY };
		setPoints([...points, newPoint]);
	}

  const handleUndo = () => {
    const allPoints: Point[] = [...points];
    const lastPoint = allPoints.pop();

    if(lastPoint) {
      lastPoints.push(lastPoint);
    }  

    setPoints(allPoints);
  }

  const handleRedo = () => {
    const allLastPoints = [...lastPoints];
    const newPoint = allLastPoints.pop();

    if(newPoint) {
      points.push(newPoint);
    }

    setLastPoints([...allLastPoints]);
  }


	return (
		<>
      <button id="Redo" onClick={handleRedo}>Redo</button>
      <button id="Undo" onClick={handleUndo}>Undo</button>
			<div className="App" onClick={addCircle}>
				{points.map((point, pointIndex) => (
					<div
						className="circle"
						style={{ left: point.x, top: point.y }}
						key={pointIndex}></div>
				))}
			</div>
		</>
	);
}

export default App;
