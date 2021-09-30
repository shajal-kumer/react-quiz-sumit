import React from "react";
import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
	return (
		<div className={classes.textInput}>
			{/* <input type={type} placeholder={placeholder} /> */}
			<input {...rest} />
			<span className="material-icons-outlined"> {icon} </span>
		</div>
	);
}
