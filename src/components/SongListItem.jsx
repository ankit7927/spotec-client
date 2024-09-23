import React from "react";
import { useDispatch } from "react-redux";
import { changeSong } from "../state/song/songSlice";

const SongListItem = ({ songItem }) => {
	const dispatch = useDispatch();

	const onPlayClick = () => {
		dispatch(changeSong(songItem));
	};

	return (
		<div className="col" id={songItem.id}>
			<div className="d-flex justify-content-between align-items-center">
				<div
					className="d-flex align-items-center"
					style={{ cursor: "pointer" }}
					onClick={onPlayClick}
				>
					<img
						src={songItem.thumbnail}
						alt={songItem.title}
						style={{ width: 60, height: 60 }}
						className="rounded-6"
					/>
					<div className="ms-3">
						<p className="fw-bold mb-0 ">
							{songItem.title.substring(0, 18)}
						</p>
						<p className="text-muted mb-0">
							{songItem.album.substring(0, 14)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SongListItem;
