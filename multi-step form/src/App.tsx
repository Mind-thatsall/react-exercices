import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import Main from "./components/Main";

interface stepContextType {
	step: number,
	setStep: (step: number) => void
}

const defaultState = {
	step: 1,
	setStep: (step: number) => step
}

export const stepContext = createContext<stepContextType>(defaultState);

function App() {
	const [step, setStep] = useState(1);

	return (
		<stepContext.Provider value={{ step, setStep }}>
			<div className="App">
				<div className="form">
					<Steps step={step} />
					<div className="personal_infos">
						<Header />

						<Main />

						<Footer />
					</div>
				</div>
			</div>
		</stepContext.Provider>
	);
}

export default App;
