import React, { Component } from "react";
import "./ChatRoom.css";

class ChatRoom extends Component {

    render() {
        return (
            <div className="chatroom">
                <h2>Chat Room {this.props.chatName}</h2>
            </div>
        );
    }
}

export default ChatRoom;
