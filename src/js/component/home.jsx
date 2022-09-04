import React from "react";
import {Todo} from "./todo.jsx";
import "../../styles/todo.css";

const Home = () => {
	return (
		<div className="container mx-0 text-center" id="div1">
			<Todo/>
			<p className="flex justify-content-start text-light"> Made By: <strong>Xavier Silva <i class="fa-solid fa-code"></i></strong></p>
		</div>
	);
};

export default Home;

