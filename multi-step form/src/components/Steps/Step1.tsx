import React from 'react'

const Step1 = () => {
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
  )
}

export default Step1