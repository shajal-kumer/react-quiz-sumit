import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agree, setAgree] = useState(false);

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Password don't match");
			return;
		}

		try {
			setError("");
			setLoading(true);
			await signup(email, password, userName);
			history.push("/");
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError("Faild to createt an account!");
		}
	};

	return (
		<Form style={{ height: "500px" }} onSubmit={handleSubmit}>
			<TextInput
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				type="text"
				placeholder="Enter Name"
				icon="person"
			/>
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
			<TextInput
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				type="password"
				placeholder="Confirm Password"
				icon="lock_clock"
			/>
			<CheckBox
				value={agree}
				onChange={(e) => setAgree(e.target.value)}
				text="I agree to the Terms &amp; Conditions"
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
