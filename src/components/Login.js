import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}.\n`);
    refreshTokenSetup(res);
};

const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
};

class Login extends Component {
    render() {
        return (
            <div className="login">
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    style={{ marginTop: "100px" }}
                    isSignedIn={true}
                />
            </div>
        );
    }
}

export default Login;
