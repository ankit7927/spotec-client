import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, loginUser } from "../state/user/userReduder";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const state = useSelector((state) => state.user);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (state.loggedIn) {
			dispatch(getUser())
			navigate("/");
		}
	}, [state.loggedIn]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	return (
		<div className="container py-5 col-sm-4">
			<div className="card">
				<div className="card-body">
					<div className="card-title">
						<h2 className="py-3">Login Here</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<div className=" mb-4">
							<input
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								type="email"
								id="email"
								className="form-control rounded"
								placeholder="Email"
							/>
						</div>

						<div className=" mb-4">
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								type="password"
								id="password"
								className="form-control rounded"
								placeholder="Password"
							/>
						</div>
						{state.status == "loading" ? (
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						) : (
							<button
								type="submit"
								className="btn btn-primary btn-block"
							>
								Login
							</button>
						)}

						<div className="mt-3">
							or register <Link to="/register">here</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
