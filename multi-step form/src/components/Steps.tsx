import {useEffect} from "react";
import '../App.css';

const Steps = ({step}: {step: number}) => {

	useEffect(() => {
	  const allSteps = document.querySelectorAll('li');
	  allSteps.forEach(step => {
		step.className = ''
	  })

	  const activeStep = document.querySelector(`[data-step="${step}"]`)
	  activeStep?.classList.add('active');
	}, [step])

	return (
		<div className="steps">
			<ol>
				<li data-step="1" className="active">
					<div>
						<p className="step">STEP 1</p>
						<p className="step_name">YOUR INFO</p>
					</div>
				</li>
				<li data-step="2">
					<div>
						<p className="step">STEP 2</p>
						<p className="step_name">SELECT PLAN</p>
					</div>
				</li>
				<li data-step="3">
					<div>
						<p className="step">STEP 3</p>
						<p className="step_name">ADD-ONS</p>
					</div>
				</li>
				<li data-step="4">
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
