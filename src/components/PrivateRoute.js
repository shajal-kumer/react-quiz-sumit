import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children, component, ...rest }) {
	const { currentUser } = useAuth();
	const Component = component ? component : children;
	return currentUser ? <Route {...rest} component={Component} /> : <Redirect to="/login" />;
}
