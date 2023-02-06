import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function About() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			id="about"
			className={`section-bg ${
				!theme ? "bg-gray-100" : "bg-dark-bg"
			} overflow-hidden h-[500px] `}
		>
			{/* ====overlay==== */}
			<div className="absolute md:right-0 md:left-[unset] left-0 right-[unset] top-0 -z-10 w-[65%] h-[100%] ">
				{/* ===img=== */}
				<div className={`${theme ? "overlay-dark" : "overlay-light"}`}></div>
			</div>
			<div className="max-width h-full">
				<div
					className={`relative top-36 md:left-24 shadow-md lg:left-32 p-7 rounded-lg md:max-w-lg max-w-xl -z-10 ${
						theme ? "opa-bg" : "opa-bg-2"
					}`}
				>
					<h2 className="text-white text-left text-3xl md:text-2xl lg:text-4xl uppercase font-semibold z-10 mb-2 ">
						About
					</h2>
					<p className="text-gray-200 font-light">
						I strive to stay at the forefront of industry trends and
						advancements, constantly seeking new and innovative ways to deliver
						value to my clients. Whether you are looking for a partner to help
						bring your vision to life, or simply need a reliable and skilled
						frontend developer to take your project to the next level, I am here
						to help. Let's work together to create something truly amazing."
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
