import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Lobby from "./Lobby";
import "./Login.css";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}

	onSuccess = (res) => {
		console.log("Login Success: currentUser:", res.profileObj);
		// alert(`Logged in successfully welcome ${res.profileObj.name}.\n`);
		this.setState({ isLoggedIn: true });
		refreshTokenSetup(res);
	};

	onFailure = (res) => {
		console.log("Login failed: res:", res);
		// alert(`Failed to login.`);
	};

	render() {
		return this.state.isLoggedIn ? (
			<div className="login">{this.state.isLoggedIn && <Lobby />}</div>
		) : (
			<div className="login">
				<div className="login-menu">
					<h5>Welcome to</h5>
					<p> Night Owl</p>
					<div className="owl-img"></div>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="Login"
						onSuccess={this.onSuccess}
						onFailure={this.onFailure}
						cookiePolicy={"single_host_origin"}
						style={{ marginTop: "100px" }}
						isSignedIn={true}
						className="google-btn"
					/>
				</div>
			</div>
		);
	}
}

export default Login;
