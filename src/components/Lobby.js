import React, { Component } from "react";
import Map from "./Map";
import Chat from "./Chat";
import Header from "./Header";
import "./Lobby.css";

class Lobby extends Component {
	render() {
		return (
			<div className="lobby">
				<Header />
				<Chat />
				<Map />
			</div>
		);
	}
}

export default Lobby;
