import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../configs/axios";
import SongListItem from "../components/SongListItem";

const PlayListPage = () => {
	const params = useParams();
	const listId = params.listId;

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [list, setList] = useState({});

	useEffect(() => {
		setLoading(true);

		Axios.get(`list/${listId}`)
			.then((response) => {
				if (response.status == 200) {
					setList(response.data);
					setLoading(false);
				} else {
					setError(response.data);
					setLoading(false);
				}
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="card">
			{error != null ? (
				<div className="alert alert-warning" role="alert">
					{error.message}
				</div>
			) : (
				<></>
			)}
			{loading ? (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="card-body">
					<div className="card-title">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex justify-content-start align-items-center">
								<Link
									to="/"
									class="btn btn-outline-secondary btn-floating btn-sm me-3"
								>
									<i class="fas fa-angle-left"></i>
								</Link>
								<h1>{list.name}</h1>
							</div>
							<button
								type="button"
								className="btn btn-primary btn-lg btn-floating ms-2"
							>
								<i class="fas fa-play"></i>
							</button>
						</div>
					</div>
					<p class="card-text">{list.description}</p>
					<div className="row row-cols-2 row-cols-3 g-3">
						{list.tracks.map((ele) => {
							return <SongListItem songItem={ele} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default PlayListPage;
