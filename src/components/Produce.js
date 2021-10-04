import PropTypes from "prop-types";
import React from "react";

function Produce(props) {
	return (
		<div id="produce_section" className="panel">
			<h2>Available Produce</h2>
			<hr />
			<p>
				{props.month}
			</p>
			<ul>
				{
					props.selection.map(function (element, index) {
						return <li key={index}>{element}</li>
					})
				}
			</ul>
		</div>
	);
}
Produce.propTypes = {
	month: PropTypes.string,
	selection: PropTypes.array
}

export default Produce;