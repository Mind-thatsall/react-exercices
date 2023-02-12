import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { step2States } from "../../types";


const Step2 = ({checked,
	setChecked,
	selectedPlan,
	setSelectedPlan,
	plans} : step2States) => {
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
					checked={checked}
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
  )
}

export default Step2