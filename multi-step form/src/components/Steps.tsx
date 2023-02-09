import React from "react";
import '../App.css';

const Steps = () => {
	return (
		<div className="steps">
			<ol>
				<li className="active">
					<div>
						<p className="step">STEP 1</p>
						<p className="step_name">YOUR INFO</p>
					</div>
				</li>
				<li>
					<div>
						<p className="step">STEP 2</p>
						<p className="step_name">SELECT PLAN</p>
					</div>
				</li>
				<li>
					<div>
						<p className="step">STEP 3</p>
						<p className="step_name">ADD-ONS</p>
					</div>
				</li>
				<li>
					<div>
						<p className="step">STEP 4</p>
						<p className="step_name">SUMMARY</p>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default Steps;
