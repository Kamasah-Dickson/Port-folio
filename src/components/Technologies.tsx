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
import { motion } from "framer-motion";
import { container, item } from "../animation";

function Technologies() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className="  tech relative h-full overflow-hidden pt-48 pb-36 "
			id="technologies"
		>
			<div className="overflow-hidden">
				<motion.h3
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 1, duration: 1.2 },
					}}
					className={`relative z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  mb-5 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
				>
					MY TECH STACK
				</motion.h3>
				<motion.h5
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 1.2, duration: 1.2 },
					}}
					className={`relative z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  text-center  text-lg font-medium uppercase`}
				>
					TECHNOLOGIES I'VE BEEN WORKING WITH
				</motion.h5>
			</div>
			<motion.div
				key={6}
				variants={container}
				initial="hidden"
				whileInView="show"
				className="max-width my-grid2 relative z-10 mt-16 flex h-full flex-wrap gap-5"
			>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={react} alt="React js" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={javaScript} alt="javaScript" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={typeScript} alt="typeScript" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={gsap} alt="gsap" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={sass} alt="gsap" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={redux} alt="redux" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={git} alt="git" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={html} alt="html" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={css} alt="css" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={github} alt="github" />
				</motion.a>
				<motion.a
					variants={item}
					href="#"
					className="transition-all hover:scale-110 active:scale-95"
				>
					<img src={tailwind} alt="tailwind css" />
				</motion.a>
			</motion.div>
		</div>
	);
}

export default Technologies;
