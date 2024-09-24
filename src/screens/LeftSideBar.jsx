import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
	const loggedIn = useSelector((state) => state.user.loggedIn);
	const userLists = useSelector((state) => state.user.lists);

	return (
		<div className="card">
			{loggedIn ? (
				<>
					<div className="card-header">
						<Link to="/liked" className="btn btn-secondary btn-rounded me-2">
							Liked
						</Link>
						<Link to="/new-list" className="btn btn-secondary btn-rounded me-2">
							create
						</Link>
					</div>
					<ul className="list-group list-group-light">
						{userLists.map((list) => {
							return (
								<Link
									key={list.id}
									to={`/list/${list.id}`}
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
								</Link>
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

export default LeftSideBar;
