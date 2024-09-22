import React from "react";
import { useSelector } from "react-redux";

const ListCard = () => {
	const lists = useSelector((state) => state.song.lists);
	return (
		<div className="card">
			<div className="card-header">
				<button className="btn btn-secondary btn-rounded me-2">
					Saved
				</button>
				<button className="btn btn-secondary btn-rounded me-2">
					Liked
				</button>
			</div>
			<ul className="list-group list-group-light">
				{lists.map((list) => {
					return (
						<button
							type="button"
							className="list-group-item list-group-item-action px-3 border-0"
						>
							<div className="ms-3">
								<p className="fw-bold mb-1">{list.name}</p>
								<p className="text-muted mb-0">
									{list.description}
								</p>
							</div>
						</button>
					);
				})}
			</ul>
		</div>
	);
};

export default ListCard;
