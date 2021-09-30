import React from "react";

export default function CheckBox({ labelClassName, text, ...rest }) {
	return (
		<label className={labelClassName}>
			<input type="checkbox" {...rest} /> <span>{text}</span>
		</label>
	);
}
