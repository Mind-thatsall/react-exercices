import '../App.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { stepContext } from '../App';

const Footer = () => {
	const { step, setStep } = useContext(stepContext);

	const nextStep = () => setStep(step + 1);
	const previousStep = () => setStep(step - 1);



	useEffect(() => {
	  const nextStepBtn = document.querySelector('#nextStep');
	  const previousStepBtn = document.querySelector('#goBack');

	  if(step < 4) {
		console.log('running', step)
		nextStepBtn?.addEventListener('click', nextStep);
	  } 
	  
	  if(step > 1) {
		previousStepBtn?.addEventListener('click', previousStep);
	  }

	  return () => {
		nextStepBtn?.removeEventListener('click', nextStep);
		previousStepBtn?.removeEventListener('click', previousStep);
	  }
	}, [step])
	

	return (
		<div className="footer">
			<button id="goBack">Go Back</button>
			<button id="nextStep" style={{backgroundColor: step === 4 ? 'hsl(243, 100%, 62%)' : 'hsl(213, 96%, 18%)' }}>{step === 4 ? 'Confirm' : 'Next Step'}</button>
		</div> 
	);
};

export default Footer;
