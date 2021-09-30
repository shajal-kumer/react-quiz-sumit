import React from "react";
import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";

export default function Answers() {
	return (
		<div class={classes.answers}>
			<CheckBox labelClassName={classes.answer} text="Test answer" />
		</div>
	);
}
