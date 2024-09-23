import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListCard = () => {
	const loggedIn = useSelector((state) => state.user.loggedIn);
	const userLists = useSelector((state) => state.user.lists);

	if (userLists.length == 0)
		return (
			<div className="card">
				{loggedIn ? (
					<>
						<div className="card-header">
							<button className="btn btn-secondary btn-rounded me-2">
								Saved
							</button>
							<button className="btn btn-secondary btn-rounded me-2">
								Liked
							</button>
						</div>
						<ul className="list-group list-group-light">
							{userLists.map((list) => {
								return (
									<button
										type="button"
										className="list-group-item list-group-item-action px-3 border-0"
									>
										<div className="ms-3">
											<p className="fw-bold mb-1">
												{list.name}
											</p>
											<p className="text-muted mb-0">
												{list.description}
											</p>
										</div>
									</button>
								);
							})}
						</ul>
					</>
				) : (
					<div className="card-body">
						<div className="card-title">
							<h5>Join us</h5>
						</div>
						<p className="card-text">
							Like, save songs and create your own playlist
						</p>
						<Link to="/login" class="card-link">
							Login
						</Link>
						<Link to="/register" class="card-link">
							Register
						</Link>
					</div>
				)}
			</div>
		);
};

export default ListCard;
