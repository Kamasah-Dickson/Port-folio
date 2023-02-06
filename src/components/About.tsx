import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import aboutDark from "../assets/vipul-jha-a4X1cdC1QAc-unsplash 1.svg";

function About() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			id="about"
			className={`section-bg ${
				theme ? "text-stroke-light " : "text-stroke-dark bg-gray-100"
			} overflow-hidden h-[65vh] `}
		>
			{/* ====overlay==== */}
			<div className="absolute right-0 top-0 -z-10 w-[50%] h-[100%] ">
				{/* ===img=== */}
				<div className={`${theme ? "overlay-dark" : "overlay-light"}`}></div>
			</div>
			<div className="max-width">
				<div className="relative top-36  md:left-24 lg:left-32 shadow-md p-5 rounded-lg md:max-w-lg max-w-xl z-20 opa-bg">
					<h2
						className={`${
							theme ? "text-white" : "text-dark-bg"
						} text-left text-3xl md:text-2xl lg:text-4xl uppercase font-semibold z-10 mb-2 `}
					>
						About
					</h2>
					<p className={`${theme ? "text-white" : "text-dark-bg"} font-light`}>
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
