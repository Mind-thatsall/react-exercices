import React, { useState } from "react";
import "../App.css";

const Rating = () => {
	const [rating, setRating] = useState<number>(0);
	const [selected, setSelected] = useState<boolean>(false);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSelected(true);
	}

	return (
		<>
			{selected ? (
				<div className="box thanks">
                    <p className="choosen-rating">You selected {rating} out of 5</p>
					<h2>Thank you!</h2>
					<p className="text" style={{textAlign: 'center'}}>
						We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
					</p>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="box">
						<div className="decorativeStar">S</div>
						<h2>How did we do?</h2>
						<p className="text">
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
						<div className="rating">
							{[1, 2, 3, 4, 5].map((rating) => (
								<button
									key={rating}
									type="button"
									className="rate"
									onClick={() => setRating(rating)}>
									{rating}
								</button>
							))}
						</div>
						<button className="submit" type="submit" disabled={rating === 0}>
							SUBMIT
						</button>
					</div>
				</form>
			)}
		</>
	);
};

export default Rating;
