import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import react from "../assets/react.svg";
import javaScript from "../assets/JS.svg";
import typeScript from "../assets/Typescript.svg";
import gsap from "../assets/greensock.svg";
import sass from "../assets/sass.svg";
import redux from "../assets/REDUX.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github2.svg";
import tailwind from "../assets/tailwind.svg";

function Technologies() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className="  tech relative h-full overflow-hidden pt-48 pb-36 "
			id="technologies"
		>
			<h3
				className={`relative z-10 ${
					!theme ? "text-dark-bg" : "text-white"
				}  mb-5 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
			>
				MY TECH STACK
			</h3>
			<h5
				className={`relative z-10 ${
					!theme ? "text-dark-bg" : "text-white"
				}  text-center  text-lg font-medium uppercase`}
			>
				TECHNOLOGIES I'VE BEEN WORKING WITH
			</h5>
			<div className="max-width my-grid2 relative z-10 mt-16 flex h-full flex-wrap gap-5">
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={react} alt="React js" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={javaScript} alt="javaScript" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={typeScript} alt="typeScript" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={gsap} alt="gsap" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={sass} alt="gsap" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={redux} alt="redux" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={git} alt="git" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={html} alt="html" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={css} alt="css" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={github} alt="github" />
				</a>
				<a href="#" className="transition-all hover:scale-110 active:scale-95">
					<img src={tailwind} alt="tailwind css" />
				</a>
			</div>
		</div>
	);
}

export default Technologies;
