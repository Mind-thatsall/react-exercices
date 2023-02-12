import { ChangeEvent } from "react";
import { Addon, step3States } from "../../types";


const Step3 = ({ selectedAddons, setSelectedAddons, addons }: step3States) => {
	const allAddons = [...selectedAddons];
	let indexOnline = allAddons.findIndex(
		(addon) => addon.name == "Online service"
	);
	let indexStorage = allAddons.findIndex(
		(addon) => addon.name == "Larger storage"
	);
	let indexProfile = allAddons.findIndex(
		(addon) => addon.name == "Customizable Profile"
	);

	function handleCheck(evt: ChangeEvent, selectedAddon: Addon, index: number) {
		if (evt?.target.checked) {
			allAddons.push(selectedAddon);
			indexOnline = allAddons.findIndex(
				(addon) => addon.name == "Online service"
			);
			console.log(indexOnline);
			selectedAddon.choosen = true;
		} else {
			allAddons.splice(index, 1);
		}
		setSelectedAddons(allAddons);
	}

	return (
		<div className="step_content addons">
			<label
				className={`addon ${allAddons[indexOnline]?.choosen ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addonCheck"
						id="addonCheck"
						checked={indexOnline === -1 ? false : true}
						onChange={(evt) => handleCheck(evt, addons.online, indexOnline)}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Online service</p>
						<p className="addon-content-description">
							Access to multiplayer games
						</p>
					</span>
				</span>
				<p className="addon-price">{addons.online.priceString}</p>
			</label>
			<label
				className={`addon ${allAddons[indexStorage]?.choosen ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addons"
						id="addonCheck"
						checked={indexStorage === -1 ? false : true}
						onChange={(evt) => handleCheck(evt, addons.storage, indexStorage)}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Larger storage</p>
						<p className="addon-content-description">Extra 1TB of cloud save</p>
					</span>
				</span>
				<p className="addon-price">{addons.storage.priceString}</p>
			</label>
			<label
				className={`addon ${allAddons[indexProfile]?.choosen ? "active" : ""}`}>
				<span className="addon_left">
					<input
						type="checkbox"
						name="addons"
						id="addonCheck"
						checked={indexProfile === -1 ? false : true}
						onChange={(evt) => handleCheck(evt, addons.profile, indexProfile)}
					/>
					<span className="addon-content">
						<p className="addon-content-title">Customizable Profile</p>
						<p className="addon-content-description">
							Custom theme on your profile
						</p>
					</span>
				</span>
				<p className="addon-price">{addons.profile.priceString}</p>
			</label>
		</div>
	);
};

export default Step3;
