import React from "react";
import { produce } from "./Data";
import Produce from "./Produce";

function ProduceList() {
	const produceForThisMonth = produce[new Date().getMonth()];

	return (
		<React.Fragment>
			<hr />
			{
				<Produce month={produceForThisMonth.month}
					selection={produceForThisMonth.selection} />
			}
		</React.Fragment>
	)
}

export default ProduceList;