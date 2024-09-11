import React from "react";

const TimeLabel = ({ secs }) => {
	let min = Math.floor(secs / 60);
	let sec = (secs - min * 60).toFixed(2);
	return (
		<label class="form-label" for="progressbar">
			{`${min}:${sec}`}
		</label>
	);
};

export default TimeLabel;
