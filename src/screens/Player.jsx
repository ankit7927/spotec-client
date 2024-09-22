import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCurrentSong } from "../state/song/songSlice";
import configs from "../configs/configs";

const Player = ({ currentSong }) => {
	const dispatch = useDispatch();
	const audioRef = useRef(null);

	const [playing, setPlaying] = useState(true);
	const [duration, setDuration] = useState(0);
	const [current, setCurrent] = useState(0);

	const togglePlayback = () => {
		setPlaying(!playing);
		if (audioRef.current != null) {
			if (audioRef.current.paused) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	};

	const clearCurrent = () => {
		if (audioRef.current != null) {
			if (!audioRef.current.paused) {
				audioRef.current.pause();
			}
		}
		dispatch(clearCurrentSong());
	};

	const onAudioTimeChanging = (e) => {
		setCurrent(e.target.currentTime);
		setDuration(e.target.duration);
	};

	return (
		<div className="card">
			<div
				className="bg-image hover-overlay ripple"
				data-mdb-ripple-color="light"
			>
				<img
					loading="lazy"
					src={currentSong.thumbnail}
					className="img-fluid"
				/>
			</div>

			<div className="card-body">
				<h5 className="card-title">{currentSong.title}</h5>
				<div>
					<div className="range">
						<input
							id="progressbar"
							className="form-range"
							type="range"
							name=""
							min={0}
							value={current}
							max={duration}
						/>
						<audio
							autoPlay
							onPlaying={() => {
								setPlaying(true);
							}}
							onTimeUpdate={onAudioTimeChanging}
							onEnded={() => {
								setPlaying(false);
							}}
							ref={audioRef}
							src={configs.apiBaseUrl + `listen/${currentSong.id}`}
						></audio>
					</div>
					<div className="mt-2">
						<button
							className="btn btn-primary m-0"
							data-ripple-color="primary"
							data-mdb-ripple-init
							onClick={togglePlayback}
						>
							{playing ? (
								<>
									<i className="fas fa-pause me-2" /> Pause
								</>
							) : (
								<>
									<i className="fas fa-play me-2" /> Play
								</>
							)}
						</button>

						<button
							className="btn btn-secondary ms-2 m-0"
							data-ripple-color="primary"
							data-mdb-ripple-init
							onClick={clearCurrent}
						>
							<i className="fas fa-stop"></i>
						</button>
					</div>
				</div>
			</div>
			<div className="card-footer">{currentSong.album}</div>
		</div>
	);
};

export default Player;
