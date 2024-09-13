import React from "react";
import { useDispatch } from "react-redux";
import { changeSong } from "../state/song/songSlice";

const SongListItem = ({ songItem, current }) => {
	const dispatch = useDispatch();

	const onPlayClick = () => {
		dispatch(changeSong(songItem));
	};

	return (
		<div class={current == null ? "col-lg-3" : "col-md-4"}>
			<div class="d-flex justify-content-between align-items-center">
				<div
					class="d-flex align-items-center"
					style={{ cursor: "pointer" }}
					onClick={onPlayClick}
				>
					<img
						src={songItem.thumbnail}
						alt={songItem.title}
						style={{ width: 60, height: 60 }}
						className="rounded-6"
					/>
					<div class="ms-3">
						<p class="fw-bold mb-0">{songItem.title}</p>
						<p class="text-muted mb-0">{songItem.album}</p>
					</div>
				</div>
				<span class="btn btn-link">
					<i class="fas fa-ellipsis-vertical ms-2"></i>
				</span>
			</div>
		</div>
	);
};

export default SongListItem;
