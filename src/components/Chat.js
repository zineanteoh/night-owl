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
				<h2>Chat Rooms</h2>
				<ol className="chat-grid">
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Biology</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Calculus</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Chemistry</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Cognitive Studies</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Computer Science</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Economics</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>History</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Psychology</p>
					</li>
					<li className="chat-item" onClick={this.triggerChatRoom}>
						<p>Statistics</p>
					</li>
				</ol>
                {this.state.isChatRoomOpen && <ChatRoomFirebase/>}
			</div>
		);
	}
}

export default Chat;
