import React from "react";
import '../App.css';

const Header = ({title, description}: {title: string, description: string}) => {
	
	return (
		<div className="personal_infos_introduction">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default Header;
