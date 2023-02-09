import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="form">
				<Steps />
				<div className="personal_infos">
					<Header title="Personal info" description="Please provide your name, email address, and phone number."/>
					
					<div className="personal_infos_inputs">
						<label>Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="e.g. Stephen King"
						/>
						<label>Email Address</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="e.g. stephenking@lorem.com"
						/>
						<label>Phone Number</label>
						<input
							type="text"
							id="phone"
							name="phone"
							placeholder="e.g. +1 234 567 890"
						/>
					</div>

					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
