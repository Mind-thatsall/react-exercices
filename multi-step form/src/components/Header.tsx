import { useContext, useEffect, useState } from "react";
import "../App.css";
import { stepContext } from "../App";

const Header = () => {
	const { step } = useContext(stepContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		switch (step) {
			case 1:
				setTitle("Personal info");
				setDescription(
					"Please provide your name, email address, and phone number."
				);
				break;
			case 2:
				setTitle("Select your plan");
				setDescription(
					"You have the option of monthly or yearly billing."
				);
				break;
			case 3:
				setTitle("Pick add-ons");
				setDescription(
					"Add-ons help enhance your gaming experience."
				);
				break;
			case 4:
				setTitle("Finishing up");
				setDescription(
					"Double-check everything looks OK before confirming."
				);
				break;
		}
	}, [step]);

	return (
		<div className="personal_infos_introduction">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default Header;
