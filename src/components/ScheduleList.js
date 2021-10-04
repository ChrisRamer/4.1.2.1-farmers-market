import React from "react";
import { schedule } from "./Data";
import Schedule from "./Schedule";

function ScheduleList() {
	const scheduleForToday = schedule[new Date().getDay()];

	return (
		<React.Fragment>
			<hr />
			{
				<Schedule day={scheduleForToday.day}
					location={scheduleForToday.location}
					hours={scheduleForToday.hours}
					booth={scheduleForToday.booth} />

				/* TODO allow toggling each day
					{schedule.map((schedule, index) =>
						{
							return <Schedule day={schedule.day}
								location={schedule.location}
								hours={schedule.hours}
								booth={schedule.booth}
								key={index} />
						}
					)}
				*/
			}
		</React.Fragment>
	)
}

export default ScheduleList;