import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { login } = useAuth();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push("/");
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError("Faild to login");
		}
	};
	return (
		<Form className={classes.login} onSubmit={handleSubmit}>
			<TextInput
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				placeholder="Enter Email"
				icon="alternate_email"
			/>
			<TextInput
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="Enter Password"
				icon="lock"
			/>

			<Button disabled={loading} type="submit">
				<span>Submit Now</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				Already have an account? <a href="login.html">Login</a> instead.
			</div>
		</Form>
	);
}
