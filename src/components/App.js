import React from "react";
import Header from "./Header";
import MyLocation from "./Location";
import AvailableProduce from "./Produce";

function App() {
  return (
    <React.Fragment>
		<Header />
		<MyLocation />
		<AvailableProduce />
	</React.Fragment>
  );
}

export default App;
