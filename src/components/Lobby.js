import React, { Component } from "react";
import Map from "./Map";
import Chat from "./Chat";

class Lobby extends Component {
    render() {
        return (
            <div className="lobby">
                <Chat/>
                <Map/>
            </div>
        );
    }
}

export default Lobby;
