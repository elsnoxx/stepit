import React from "react";
import Navbar from "./components/navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./lessons";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/lessons" element={<About />} />
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route path="/blogs" element={<Blogs />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
