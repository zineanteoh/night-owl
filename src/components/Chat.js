import React, { Component } from "react";
// import ChatRoom from "./ChatRoom";
import ChatRoomFirebase from "./ChatRoomFirebase";
import "./Chat.css";

class Chat extends Component {
	constructor(props) {
        super(props);

        this.state = {
            isChatRoomOpen: false,
        }
        this.triggerChatRoom = this.triggerChatRoom.bind(this);
    }

    triggerChatRoom(subject) {
        this.setState({isChatRoomOpen: !this.state.isChatRoomOpen})
    }

	render() {
		return (
			<div className="chat">
				<h2>Chats</h2>
				<ol className="chat-grid">
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Biology</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Calculus</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Chemistry</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Cognitive Studies</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Computer Science</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Economics</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>History</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Psychology</h2>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<h2>Statistics</h2>
					</li>
				</ol>
                {this.state.isChatRoomOpen && <ChatRoomFirebase/>}
			</div>
		);
	}
}

export default Chat;
