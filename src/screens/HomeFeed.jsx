import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeFeed } from "../state/song/songReducer";
import PlayListItem from "../components/PlayListItem";
import SongListItem from "../components/SongListItem";

const HomeFeed = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.song);

	useEffect(() => {
		if (state.lists.length == 0 || state.tracks.length == 0)
			dispatch(homeFeed());
	}, []);

	return state.state == "loading" ? (
		<div className="spinner-border" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	) : (
		<>
			<div className="row row-cols-2 row-cols-md-4 g-3 mb-3">
				{state.lists.map((ele) => {
					return <PlayListItem key={ele.id} playList={ele} />;
				})}
			</div>

			<div className="card">
				<div className="card-body row g-4">
					<div className="row row-cols-2 row-cols-md-3 g-3">
						{state.tracks.map((ele) => {
							return (
								<SongListItem
									key={ele.id}
									songItem={ele}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeFeed;
