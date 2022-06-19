import React from "react";
import {Navbar} from "./navbar.jsx";
import {Jumbotron} from "./jumbotron.jsx";
import {Container} from "./container.jsx";
import {Footer} from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const App = () => {
	return (
		<>
		<div><Navbar/></div>
		<div className="container"><Jumbotron/></div>
		<Container/>
		<Footer/>
		</>
	);
};

export default App;
