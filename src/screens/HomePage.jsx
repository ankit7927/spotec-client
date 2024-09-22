import React, { useEffect } from "react";
import Player from "./Player";
import { homeFeed } from "../state/song/songReducer";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "./ListCard";
import { Outlet } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.song);
	useEffect(() => {
		dispatch(homeFeed(0));
	}, []);

	return (
		<div>
			<div className="row g-3">
				<div className="col-md-3">
					<ListCard />
				</div>
				<div
					className={
						state.currentSong == null ? "col-md-9" : "col-md-6"
					}
				>
					<Outlet />
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
