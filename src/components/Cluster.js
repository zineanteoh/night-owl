import React, { Component } from "react";
import "./Cluster.css";

class Cluster extends Component {
	render() {
		return (
			<div className="cluster">
				<iframe src="http://localhost:8000/" sandbox></iframe>
			</div>
		);
	}
}

export default Cluster;
