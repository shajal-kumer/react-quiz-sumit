import React from "react";
import classes from "../styles/Button.module.css";

export default function Button({ children, className }) {
	return <button class={`${classes.button} ${className}`}>{children}</button>;
}
