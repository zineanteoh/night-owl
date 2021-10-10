import React, { Component } from "react";
import Map from "./Map";
import Chat from "./Chat";
import "./Lobby.css";

class Lobby extends Component {
	render() {
		return (
			<div className="lobby"> 
				<Map />
				<Chat />
			</div>
		);
	}
}

export default Lobby;
