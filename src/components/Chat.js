import React, { Component } from "react";
import "./Chat.css";

class Chat extends Component {
	render() {
		return (
			<div className="chat">
				<h2>Chats</h2>
				<ol className="chat-grid">
					<li className="chat-item">
						<h2>Biology</h2>
					</li>
					<li className="chat-item">
						<h2>Calculus</h2>
					</li>
					<li className="chat-item">
						<h2>Chemistry</h2>
					</li>
                    <li className="chat-item">
						<h2>Cognitive Studies</h2>
					</li>
					<li className="chat-item">
						<h2>Computer Science</h2>
					</li>
					<li className="chat-item">
						<h2>Economics</h2>
					</li>
					<li className="chat-item">
						<h2>History</h2>
					</li>
					<li className="chat-item">
						<h2>Psychology</h2>
					</li>
					<li className="chat-item">
						<h2>Statistics</h2>
					</li>

				</ol>
			</div>
		);
	}
}

export default Chat;
