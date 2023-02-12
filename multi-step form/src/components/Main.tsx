import { ChangeEvent, useContext, useEffect, useState } from "react";
import { stepContext } from "../App";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

type Addon = {
	choosen: boolean;
	name: string;
	price: number;
	priceString: string;
};

const Main = () => {
	const { step } = useContext(stepContext);
	const [page, setPage] = useState(Step1);
	const [checked, setChecked] = useState(false);

	const plans = {
		arcade: {
			name: "arcade",
			displayName: checked ? "Arcade (Yearly)" : "Arcade (Monthly)",
			price: checked ? 90 : 9,
		},
		advanced: {
			name: "advanced",
			displayName: checked ? "Advanced (Yearly)" : "Advanced (Monthly)",
			price: checked ? 120 : 12,
		},
		pro: {
			name: "pro",
			displayName: checked ? "Pro (Yearly)" : "Pro (Monthly)",
			price: checked ? 150 : 15,
		},
	};
	
	const addons = {
		online: {
			choosen: false,
			name: "Online service",
			price: checked ? 10 : 1,
			priceString: checked ? "+10$/yr" : "+1$/mo",
		},
		storage: {
			choosen: false,
			name: "Larger storage",
			price: checked ? 20 : 2,
			priceString: checked ? "+20$/yr" : "+2$/mo",
		},
		profile: {
			choosen: false,
			name: "Customizable Profile",
			price: checked ? 20 : 2,
			priceString: checked ? "+20$/yr" : "+2$/mo",
		},
	};
	

	const [selectedPlan, setSelectedPlan] = useState(plans.arcade);
	const [selectedAddons, setSelectedAddons] = useState<Array<Addon>>([]);

	useEffect(() => {
		switch (step) {
			case 1:
				setPage(Step1);
				break;
			case 2:
				setPage(() =>
					Step2({ checked, setChecked, selectedPlan, setSelectedPlan, plans })
				);
				break;
			case 3:
				setPage(() => Step3({ selectedAddons, setSelectedAddons, addons }));
				break;
			case 4:
				setPage(() => Step4({ checked, selectedPlan, selectedAddons }));
				break;
		}
	}, [step, checked, selectedPlan, selectedAddons]);

	useEffect(() => {
		const plan = Object.entries(plans).find(
			(plan) => plan[0] === selectedPlan.name
		)![1];
		setSelectedPlan(plan);

		if (selectedAddons.length > 0) {
			selectedAddons.forEach((addon) => {
				if (addon.name === addons.online.name) {
					addon.price = addons.online.price;
					addon.priceString = addons.online.priceString;
				} else if (addon.name === addons.storage.name) {
					addon.price = addons.storage.price;
					addon.priceString = addons.storage.priceString;
				} else if (addon.name === addons.profile.name) {
					addon.price = addons.profile.price;
					addon.priceString = addons.profile.priceString;
				}
			});
		}
	}, [checked]);

	return <div id="app">{page}</div>;
};

export default Main;
