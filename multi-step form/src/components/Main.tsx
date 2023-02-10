import { useContext, useEffect, useState } from "react";
import { stepContext } from "../App";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

type step2States = {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	selected: string;
	setSelected: (selected: string) => void;
};

type step3States = {
	selectedAddons: { online: boolean; storage: boolean; profile: boolean };
	setSelectedAddons: ({
		online,
		storage,
		profile,
	}: {
		online: boolean;
		storage: boolean;
		profile: boolean;
	}) => void;
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

function Step2({ checked, setChecked, selected, setSelected }: step2States) {
	return (
		<div className="step_content">
			<div className="cards">
				<span
					className={`card ${selected === "arcade" ? "active" : ""}`}
					onClick={() => setSelected("arcade")}>
					<img src={arcade} alt="" />
					<div>
						<p className="plan_name">Arcade</p>
						<p className="price">{checked ? "$90/yr" : "9$/mo"}</p>
						{checked ? <p className="yearly_month_free">2 months free</p> : ""}
					</div>
				</span>
				<span
					className={`card ${selected === "advanced" ? "active" : ""}`}
					onClick={() => setSelected("advanced")}>
					<img src={advanced} alt="" />
					<div>
						<p className="plan_name">Advanced</p>
						<p className="price">{checked ? "$120/yr" : "12$/mo"}</p>
						{checked ? <p className="yearly_month_free">2 months free</p> : ""}
					</div>
				</span>
				<span
					className={`card ${selected === "pro" ? "active" : ""}`}
					onClick={() => setSelected("pro")}>
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
					onChange={() => setChecked(!checked)}
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

function Step3({ selectedAddons, setSelectedAddons }: step3States) {
	return (
		<div className="step_content addons">
			<label className={`addon ${selectedAddons.online ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addonCheck"
						id="addonCheck"
						onChange={() =>
							setSelectedAddons({
								online: !selectedAddons.online,
								storage: selectedAddons.storage,
								profile: selectedAddons.profile,
							})
						}
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

const Main = () => {
	const { step } = useContext(stepContext);
	const [page, setPage] = useState(Step1);
	const [checked, setChecked] = useState(false);
	const [selected, setSelected] = useState("arcade");
	const [selectedAddons, setSelectedAddons] = useState({
		online: false,
		storage: false,
		profile: false,
	});

	useEffect(() => {
		switch (step) {
			case 1:
				setPage(Step1);
				break;
			case 2:
				setPage(() => Step2({ checked, setChecked, selected, setSelected }));
				break;
			case 3:
				setPage(() => Step3({ selectedAddons, setSelectedAddons }));
				break;
			case 4:
				setPage(Step4);
				break;
		}
	}, [step, checked, selected, selectedAddons]);

	return <div id="app">{page}</div>;
};

export default Main;
