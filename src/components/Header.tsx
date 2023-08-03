import React, { useContext, useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import MobileMenu from "./MobileMenu";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animation";

function Header() {
	const { theme, setTheme, show, setShow } = useContext(ThemeContext);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={`fixed top-0 left-0 z-50 w-full shadow-md ${
				theme
					? "bg-[#d1cbcb13] filter backdrop-saturate-150"
					: " bg-[#ffffff6e] backdrop-saturate-[3]"
			}`}
		>
			<div
				className="
			z-30
			mx-auto
			flex
			h-[75px] max-w-7xl items-center justify-between px-3"
			>
				<h1
					className={`cursor-pointer text-[20px] font-bold ${
						theme ? "text-white" : "text-gray-700"
					} md:text-xl lg:text-2xl`}
				>
					<a href="/">
						KAMAS<span className="text-orange active:scale-105">.DEV</span>
					</a>
				</h1>
				<nav>
					<AnimatePresence>
						<motion.ul
							key={3}
							variants={container}
							initial="hidden"
							animate="show"
							className="hidden items-center gap-5  md:flex"
						>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#home"
								>
									HOME
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#about"
								>
									ABOUT
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#hire-me"
								>
									HIRE ME
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#technologies"
								>
									TECHNOLOGY
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#projects"
								>
									PROJECTS
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a
									className=" relative text-sm font-medium before:absolute before:left-0 before:bottom-[-0.3125em] before:h-1 before:w-0 before:bg-[orange] before:transition-all hover:before:w-4/5"
									href="#contact"
								>
									CONTACT
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className="cursor-pointer text-white"
								aria-label={theme ? "toggle lightmode" : "toggle darkMode"}
								tabIndex={0}
								onClick={() => setTheme((prev) => !prev)}
							>
								{theme ? (
									<MdLightMode color="white" size={20} />
								) : (
									<MdDarkMode size={20} className="text-gray-700" />
								)}
							</motion.li>
						</motion.ul>
					</AnimatePresence>
					<motion.ul
						key={4}
						variants={container}
						initial="hidden"
						animate="show"
						className="flex items-center gap-3 md:hidden"
					>
						<motion.li
							variants={item}
							className="cursor-pointer list-none text-white"
							aria-label={theme ? "toggle lightmode" : "toggle darkMode"}
							tabIndex={0}
							onClick={() => setTheme((prev) => !prev)}
						>
							{theme ? (
								<MdLightMode color="white" size={20} />
							) : (
								<MdDarkMode size={20} className="text-gray-700" />
							)}
						</motion.li>
						<motion.li
							variants={item}
							className="cursor-pointer list-none"
							onClick={() => setShow(true)}
						>
							{theme ? (
								<BiMenuAltLeft color="white" size={25} />
							) : (
								<BiMenuAltLeft size={25} className="text-gray-700" />
							)}
						</motion.li>
					</motion.ul>
				</nav>

				<MobileMenu show={show} setShow={setShow} />
			</div>
		</motion.header>
	);
}

export default Header;
