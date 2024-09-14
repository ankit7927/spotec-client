import React, { useEffect } from "react";
import SongListItem from "../components/SongListItem";
import Player from "./Player";
import { getSongs, paginate } from "../state/song/songReducer";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.song);
	useEffect(() => {
		dispatch(getSongs());
	}, []);

	const onNextPage = () => {
		const page = state.page;
		dispatch(paginate(page + 1));
	};

	const onPrePage = () => {
		const page = state.page;
		dispatch(paginate(page - 1));
	};

	return (
		<div>
			<div className="row g-4">
				<div
					className={
						state.currentSong == null ? "col-md-12" : "col-md-9"
					}
				>
					{state.state == "loading" ? (
						<h4>Loading</h4>
					) : (
						<div className="card">
							<div className="card-body row g-3">
								{state.rows.map((ele) => {
									return (
										<SongListItem
											songItem={ele}
											current={state.currentSong}
										/>
									);
								})}
							</div>
							<div className="card-footer">
								<button
									className="btn btn-secondary me-2"
									onClick={onPrePage}
								>
									Previous
								</button>
								<button
									className="btn btn-secondary"
									onClick={onNextPage}
								>
									Next
								</button>
							</div>
						</div>
					)}
				</div>

				{state.currentSong == null ? (
					<></>
				) : (
					<div className="col-md-3">
						<Player currentSong={state.currentSong} />
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
