import React, { Component } from "react";
import "./JoinGroup.css";

class JoinGroup extends Component {
	render() {
		return (
			<div className="joingroup">
				<div className="title">
					<h1>Join a Group</h1>
				</div>

				<div class="partition anyone">
					<h3>Study with Anyone</h3>
					<div className="owls">
						<div className="brown1_owl"></div>
						<div className="yellow_owl"></div>
						<div className="pink_owl"></div>
					</div>
					<div class="select">
						<select name="slct" id="slct">
							<option>Select a group</option>
							<option value="1">Stevenson Library</option>
							<option value="2">Central Library</option>
							<option value="3">Stevenson 3</option>
						</select>
					</div>
				</div>

				<div class="partition subject">
					<h3>Study by Subject</h3>
					<div className="owls">
						<div className="brown1_owl"></div>
						<div className="brown2_owl"></div>
						<div className="brown3_owl"></div>
					</div>
					<div class="selectC">
						<select name="slct" id="slct">
							<option>Select a group</option>
							<option value="1">Biology</option>
							<option value="2">Calculus</option>
							<option value="3">Chemistry</option>
							<option value="4">Cognitive Studies</option>
							<option value="5">Computer Science</option>
							<option value="6">Economics</option>
							<option value="7">History</option>
							<option value="8">Psychology</option>
							<option value="9">Statistics</option>
						</select>
					</div>
				</div>

				<div class="submit">
					<h4>Submit</h4>
				</div>
			</div>
		);
	}
}

export default JoinGroup;
