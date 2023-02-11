import { useContext, useEffect, useState } from "react";
import { stepContext } from "../App";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

type step2States = {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	selectedPlan: { name: string; price: number };
	setSelectedPlan: ({ name, price }: { name: string; price: number }) => void;
	plans: {
		arcade: {
			name: string;
			price: number;
		};
		advanced: {
			name: string;
			price: number;
		};
		pro: {
			name: string;
			price: number;
		};
	};
};

type step3States = {
	selectedAddons: Object[];
	setSelectedAddons: ([]: Object[][]) => void;
	addons: {
		online: {
			name: string,
			price: number,
		},
		storage: {
			name: string,
			price: number,
		},
		profile: {
			name: string,
			price: number,
		}
	}
};

function Step1() {
	return (
		<div className="step_content">
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
	);
}

function Step2({
	checked,
	setChecked,
	selectedPlan,
	setSelectedPlan,
	plans,
}: step2States) {

	return (
		<div className="step_content">
			<div className="cards">
				<span
					className={`card ${selectedPlan.name === "arcade" ? "active" : ""}`}
					onClick={() => setSelectedPlan(plans.arcade)}>
					<img src={arcade} alt="" />
					<div>
						<p className="plan_name">Arcade</p>
						<p className="price">{checked ? "$90/yr" : "9$/mo"}</p>
						{checked ? <p className="yearly_month_free">2 months free</p> : ""}
					</div>
				</span>
				<span
					className={`card ${selectedPlan.name === "advanced" ? "active" : ""}`}
					onClick={() => setSelectedPlan(plans.advanced)}>
					<img src={advanced} alt="" />
					<div>
						<p className="plan_name">Advanced</p>
						<p className="price">{checked ? "$120/yr" : "12$/mo"}</p>
						{checked ? <p className="yearly_month_free">2 months free</p> : ""}
					</div>
				</span>
				<span
					className={`card ${selectedPlan.name === "pro" ? "active" : ""}`}
					onClick={() => setSelectedPlan(plans.pro)}>
					<img src={pro} alt="" />
					<div>
						<p className="plan_name">Pro</p>
						<p className="price">{checked ? "$150/yr" : "15$/mo"}</p>
						{checked ? <p className="yearly_month_free">2 months free</p> : ""}
					</div>
				</span>
			</div>
			<div className="choose_billing">
				<span
					className="billing"
					style={{ color: checked ? "#9d9da7" : "hsl(213, 96%, 18%)" }}>
					Monthly
				</span>
				<input
					type="checkbox"
					name="toggle"
					id="toggle"
					onChange={() => {
						setChecked(!checked);
					}}
				/>
				<span
					className="billing"
					style={{ color: checked ? "hsl(213, 96%, 18%)" : "#9d9da7" }}>
					Yearly
				</span>
			</div>
		</div>
	);
}

function Step3({ selectedAddons, setSelectedAddons, addons}: step3States) {

	const addonsChecked = {
		online: false,
		storage: false,
		profile: false,
	}

	return (
		<div className="step_content addons">
			<label className={`addon ${selectedAddons.online ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addonCheck"
						id="addonCheck"
						checked={addonsChecked.online}
						onChange={() =>{
							const el:HTMLInputElement|null = document.querySelector('#addonCheck');
							const allAddons = [...selectedAddons];
							el?.checked ? allAddons.push(addons.online) : allAddons.splice(allAddons.indexOf(addons.online), 1);
							setSelectedAddons(allAddons);
							
							addonsChecked.online = !addonsChecked.online;
						}}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Online service</p>
						<p className="addon-content-description">
							Access to multiplayer games
						</p>
					</span>
				</span>
				<p className="addon-price">+$1/mo</p>
			</label>
			<label className={`addon ${selectedAddons.storage ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addons"
						id="addonCheck"
						onChange={() =>
							setSelectedAddons({
								online: selectedAddons.online,
								storage: !selectedAddons.storage,
								profile: selectedAddons.profile,
							})
						}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Larger storage</p>
						<p className="addon-content-description">Extra 1TB of cloud save</p>
					</span>
				</span>
				<p className="addon-price">+$2/mo</p>
			</label>
			<label className={`addon ${selectedAddons.profile ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addons"
						id="addonCheck"
						onChange={() =>
							setSelectedAddons({
								online: selectedAddons.online,
								storage: selectedAddons.storage,
								profile: !selectedAddons.profile,
							})
						}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Customizable Profile</p>
						<p className="addon-content-description">
							Custom theme on your profile
						</p>
					</span>
				</span>
				<p className="addon-price">+$2/mo</p>
			</label>
		</div>
	);
}

function Step4() {
	return (
		<div className="step_content">
			<div className="summary">
				<div className="plan">
					<span>
						<p className="plan_name">Arcade (Monthly)</p>
						<a className="change_plan">Change</a>
					</span>
					<p className="plan_price">$9/mo</p>
				</div>
				<hr />
				<div className="summary_addons">
					<span className="summary_addon">
						<p className="addon_name">Online service</p>
						<p className="addon_price">+$1/mo</p>
					</span>
					<span className="summary_addon">
						<p className="addon_name">Online service</p>
						<p className="addon_price">+$1/mo</p>
					</span>
				</div>
			</div>
			<span className="total">
				<p className="total_plan">Total (per month)</p>
				<p className="total_price">+$12/mo</p>
			</span>
		</div>
	);
}

const Main = () => {
	const { step } = useContext(stepContext);
	const [page, setPage] = useState(Step1);
	const [checked, setChecked] = useState(false);

	const plans = {
		arcade: {
			name: "arcade",
			price: checked ? 90 : 9,
		},
		advanced: {
			name: "advanced",
			price: checked ? 120 : 12,
		},
		pro: {
			name: "pro",
			price: checked ? 150 : 15,
		},
	};

	const addons = {
		online: {
			name: 'Online service',
			price: checked ? 10 : 1,
		},
		storage: {
			name: 'Larger storage',
			price: checked ? 20 : 2,
		},
		profile: {
			name: 'Cutomizable Profile',
			price: checked ? 20 : 2,
		}
	};

	const [selectedPlan, setSelectedPlan] = useState(plans.arcade);
	const [selectedAddons, setSelectedAddons] = useState<Array<Object[]>>([]);

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
				setPage(Step4);
				break;
		}
	}, [step, checked, selectedPlan, selectedAddons]);

	useEffect(() => {
		const plan = Object.entries(plans).find(plan => plan[0] === selectedPlan.name)![1];
		setSelectedPlan(plan);
	}, [checked]);

	return <div id="app">{page}</div>;
};

export default Main;
