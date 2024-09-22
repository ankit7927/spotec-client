import React from "react";
import { Link } from "react-router-dom";

const PlayListItem = ({ playList }) => {
	return (
		<div className="col" style={{ cursor: "pointer" }}>
			<Link to={`/list/${playList.id}`}>
				<div className="card h-100">
					<div className="card-body">{playList.name}</div>
				</div>
			</Link>
		</div>
	);
};

export default PlayListItem;
