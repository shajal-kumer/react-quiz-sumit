import React from "react";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>
			<div className="column">
				<Illustration />
				<Form className={classes.login}>
					<TextInput type="email" placeholder="Enter Email" icon="alternate_email" />
					<TextInput type="password" placeholder="Enter Password" icon="lock" />

					<Button>
						<span>Submit Now</span>
					</Button>

					<div className="info">
						Already have an account? <a href="login.html">Login</a> instead.
					</div>
				</Form>
			</div>
		</>
	);
}
