import React, { Component } from "react";
import "./Map.css";
import CreateGroup from "./CreateGroup";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import JoinGroup from "./JoinGroup";

class Map extends Component {

	render() {
		return (
			<div className="map">
				<div className="map-area">
					<div className="corner-buttons">
						<Popup
							trigger={
								<button className="create-group-button">
									Create Group
								</button>
							}
							modal
							nested
						>
							<CreateGroup/>
						</Popup>
						<Popup
							trigger={
								<button className="join-group-button">
									Join Group
								</button>
							}
							modal
							nested
						>
							<JoinGroup/>
						</Popup>
					</div>
				</div>
			</div>
		);
	}
}

// class Map extends Component {
//     render() {
//         return (
//             <div className="map">
//                 <div className="map-area"></div>
//                 {/* <h2>Lobby</h2> */}
//             </div>
//         );
//     }
// }

export default Map;
