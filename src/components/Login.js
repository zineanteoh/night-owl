import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
import Lobby from "./Lobby";
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
        return (
            <div className="login">
                {console.log("Here: ", this.state.isLoggedIn)}
                {!this.state.isLoggedIn && (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={"single_host_origin"}
                        style={{ marginTop: "100px" }}
                        isSignedIn={true}
                    />
                )}
                {this.state.isLoggedIn && <Lobby />}
            </div>
        );
    }
}

export default Login;
