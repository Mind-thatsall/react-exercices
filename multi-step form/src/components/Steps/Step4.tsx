import { useContext } from 'react';
import { stepContext } from '../../App';
import { Addon, step4States } from '../../types';

const Step4 = ({ checked, selectedPlan, selectedAddons }: step4States) => {
    const { step, setStep } = useContext(stepContext);
    
    let totalAddons = selectedAddons.reduce((acc, addon) => acc + addon.price, 0)
	let total = totalAddons + selectedPlan.price;

    return (
    <div className="step_content">
			<div className="summary">
				<div className="plan">
					<span>
						<p className="plan_name">{selectedPlan.displayName}</p>
						<p className="change_plan" onClick={() => setStep(step - 2)}>Change</p>
					</span>
					<p className="plan_price">
						+$
						{checked ? selectedPlan.price + "/yr" : selectedPlan.price + "/mo"}
					</p>
				</div>
				<hr />
				<div className="summary_addons">
					{selectedAddons.map((addon, index) => (
						<span className="summary_addon" key={index}>
							<p className="addon_name">{addon.name}</p>
							<p className="addon_price">+${checked ? addon.price + "/yr" : addon.price + "/mo"}</p>
						</span>
					))}
				</div>
			</div>
			<span className="total">
				<p className="total_plan">{checked ? 'Total (per year)' : 'Total (per month)'}</p>
				<p className="total_price">+${checked ? total + "/yr" : total + "/mo"}</p>
			</span>
		</div>
  )
}

export default Step4
