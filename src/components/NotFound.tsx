import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function NotFound() {
	useEffect(() => {
		const time = setTimeout(() => {
			window.location.href = "/";
		}, 1000);

		return () => clearTimeout(time);
	});

	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`flex h-screen w-full flex-col items-center justify-center ${
				theme ? "text-dark-bg" : "text-white"
			}`}
		>
			<div className="text-center text-2xl font-medium">
				I think You're Lost 🚧
			</div>
			<Link to="/">
				<button
					className={`${
						theme ? "bg-dark-bg text-white " : "bg-white text-dark-bg"
					} mt-5 rounded-md p-4 transition-all hover:scale-[1.1] active:scale-95`}
				>
					Go back Home
				</button>
			</Link>
		</div>
	);
}

export default NotFound;
