import React, { useContext, useEffect } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { container2, item2 } from "../animation";

interface showInterface {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ show, setShow }: showInterface) {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div
			className={` ${
				show ? "translate-x-0 " : "translate-x-full"
			} my-trans fixed top-0 right-0 z-50 min-h-screen w-4/5 text-white md:hidden`}
		>
			<nav
				className={`${theme ? "bg-dark-bg" : "bg-gray-900"} bg-opacity-[0.97]`}
			>
				<div
					className="absolute top-12 right-7 cursor-pointer"
					onClick={() => setShow(false)}
				>
					<IoMdCloseCircle size={30} />
				</div>
				{show && (
					<AnimatePresence>
						<motion.ul
							key={5}
							variants={container2}
							initial="hidden"
							animate="show"
							className={`flex h-screen w-full flex-col items-center justify-center gap-5`}
						>
							<motion.li
								variants={item2}
								className="list-none text-white active:scale-x-105"
							>
								<a
									className=" before text-lg font-medium"
									href="#home"
									onClick={() => setShow(false)}
								>
									HOME
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="text-white active:scale-x-105"
							>
								<a
									className=" before text-lg font-medium"
									href="#about"
									onClick={() => setShow(false)}
								>
									ABOUT
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="text-white active:scale-x-105"
							>
								<a
									className=" before text-lg font-medium"
									href="#hire-me"
									onClick={() => setShow(false)}
								>
									HIRE ME
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="text-white active:scale-x-105"
							>
								<a
									className=" before text-lg font-medium"
									href="#technologies"
									onClick={() => setShow(false)}
								>
									TECHNOLOGIES
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="text-white active:scale-x-105"
							>
								<a
									className=" before text-lg font-medium"
									href="#projects"
									onClick={() => setShow(false)}
								>
									PROJECTS
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="text-white active:scale-x-105"
							>
								<a
									className=" before text-sm font-medium"
									href="#contact"
									onClick={() => setShow(false)}
								>
									CONTACT
								</a>
							</motion.li>
							<motion.li
								variants={item2}
								className="cursor-pointer text-white"
								aria-label={theme ? "toggle lightmode" : "toggle darkMode"}
								tabIndex={0}
								onClick={() => setTheme((prev) => !prev)}
							>
								{theme ? (
									<MdLightMode color="white" size={20} />
								) : (
									<MdDarkMode size={20} />
								)}
							</motion.li>
						</motion.ul>
					</AnimatePresence>
				)}
			</nav>
		</div>
	);
}

export default MobileMenu;
