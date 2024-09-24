import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPlaylist } from "../state/user/userReduder";

const PLForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [privateList, setPrivateList] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createPlaylist({ name, description, private: privateList }))
		navigate("/")
	};

	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title d-flex">
					<Link
						to="/"
						class="btn btn-outline-secondary btn-floating btn-sm me-3"
					>
						<i class="fas fa-angle-left"></i>
					</Link>
					<h4>Create New Playlist</h4>
				</div>
				<form className="pt-2" onSubmit={onSubmit}>
					<div className=" mb-4">
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							type="text"
							className="form-control rounded"
							placeholder="Playlist Name"
						/>
					</div>

					<div className=" mb-4">
						<textarea
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							className="form-control rounded"
							placeholder="Playlist Dscription"
							rows="5"
						/>
					</div>
					<div class="mb-4">
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value={privateList}
								onChange={(e) => {
									setPrivateList(e.target.value);
								}}
							/>
							<label class="form-check-label" for="form1Example3">
								Private List
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-primary btn-block">
						Create Playlist
					</button>
				</form>
			</div>
		</div>
	);
};

export default PLForm;
