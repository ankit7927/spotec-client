import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SongListItem from "../components/SongListItem";

const LikedList = () => {
	const likedTracks = useSelector((state) => state.user.tracks);
	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex ">
							<Link
								to="/"
								class="btn btn-outline-secondary btn-floating btn-sm me-3"
							>
								<i class="fas fa-angle-left"></i>
							</Link>
							<h3>Liked Songs</h3>
						</div>
					</div>
				</div>

				<div className="row row-cols-2 row-cols-3 g-3">
					{likedTracks.map((ele) => {
						return <SongListItem songItem={ele} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default LikedList;
