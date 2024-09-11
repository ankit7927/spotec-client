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
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <img
                                src={songItem.thumbnail}
                                alt=""
                                style={{ width: 60, height: 60 }}
                                className="rounded-3"
                            />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">{songItem.title}</p>
                                <p class="text-muted mb-0">{songItem.album}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
                    <button
                        onClick={onPlayClick}
                        class="btn btn-link m-0 text-reset"
                        href="#"
                        role="button"
                        data-ripple-color="primary"
                        data-mdb-ripple-init
                    >
                        Play <i class="fas fa-play ms-2"></i>
                    </button>
                    <button
                        class="btn btn-link m-0 text-reset"
                        href="#"
                        role="button"
                        data-ripple-color="primary"
                        data-mdb-ripple-init
                    >
                        Like <i class="fas fa-heart ms-2"></i>
                    </button>
                    <button
                        class="btn btn-link m-0 text-reset"
                        href="#"
                        role="button"
                        data-ripple-color="primary"
                        data-mdb-ripple-init
                    >
                        More <i class="fas fa-ellipsis-vertical ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SongListItem;
