import PropTypes from "prop-types";
import React from "react";

function Schedule(props) {
	return (
		<div id="location_section" className="panel">
			<h2>Where to find us</h2>
			<hr />
			<p><b>{props.location}</b></p>
			<p><b>Booth {props.booth}</b> </p>
			<p>{props.hours}</p>
		</div>
	);
}
Schedule.propTypes = {
	day: PropTypes.string,
	location: PropTypes.string,
	hours: PropTypes.string,
	booth: PropTypes.string
}

export default Schedule;