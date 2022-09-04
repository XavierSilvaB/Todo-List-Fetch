import React from "react";
import {Todo} from "./todo.jsx";
import "../../styles/todo.css";

const Home = () => {
	return (
		<div className="container mx-0 text-center" id="div1">
			<Todo/>
			<p className="flex justify-content-start text-light mb-1"> Made By : <strong>Xavier Silva</strong></p>
			<p className="flex justify-content-start text-light mt-0"> impossible is nothing </p>
		</div>
	);
};

export default Home;

