import React, { Component } from "react";
import "./CreateGroup.css";

class CreateGroup extends Component {
	render() {
		return (
			<div className="creategroup">
				<div className="title">
					<h1>Create a New Group</h1>
				</div>
				<div className="location">
					<div className="select">
						<select className="slct" id="slct">
							<option>Select a location</option>
							<option value="1">Stevenson Library</option>
							<option value="2">Central Library</option>
							<option value="3">Stevenson 3</option>
						</select>
					</div>
				</div>

				<div className="partition anyone">
					<h3>Study with Anyone</h3>
					<div className="owls">
						<div className="brown1_owl"></div>
						<div className="yellow_owl"></div>
						<div className="pink_owl"></div>
					</div>
				</div>
				<div className="partition subject">
					<h3>Study by Subject</h3>
					<div className="owls">
						<div className="brown1_owl"></div>
						<div className="brown2_owl"></div>
						<div className="brown3_owl"></div>
					</div>
					<div className="selectC">
						<select className="slct" id="slct">
							<option>Select a subject</option>
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
				<div className="submit">
					<h4>Submit</h4>
				</div>
			</div>
		);
	}
}

export default CreateGroup;
