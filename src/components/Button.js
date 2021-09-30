import React from "react";
import classes from "../styles/Button.module.css";

export default function Button({ children }) {
	return (
		<button class={classes.button}>
			<span>{children}</span>
		</button>
	);
}
