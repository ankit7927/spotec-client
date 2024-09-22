import React from "react";
import { useSelector } from "react-redux";

const ListCard = () => {
	const lists = useSelector((state) => state.song.lists);
	return (
		<div className="card">
			<div className="card-header">
				<button
					type="button"
					class="btn btn-secondary btn-floating me-2"
					data-mdb-ripple-init
				>
					<i class="fas fa-home"></i>
				</button>
				<button className="btn btn-secondary btn-rounded me-2">
					Saved
				</button>
				<button className="btn btn-secondary btn-rounded me-2">
					Liked
				</button>
			</div>
			<ul class="list-group list-group-light">
				{lists.map((list) => {
					return (
						<button
							type="button"
							class="list-group-item list-group-item-action px-3 border-0"
						>
							<div class="ms-3">
								<p class="fw-bold mb-1">{list.name}</p>
								<p class="text-muted mb-0">
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
