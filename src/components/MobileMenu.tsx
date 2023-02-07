import React, { useContext } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { IoMdCloseCircle } from "react-icons/io";

interface showInterface {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ show, setShow }: showInterface) {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div
			className={` ${
				show ? "translate-x-0" : "translate-x-full"
			} fixed top-0 right-0 z-50 min-h-screen w-4/5 text-white transition-transform md:hidden`}
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
				<ul
					className={`flex h-screen w-full flex-col items-center justify-center gap-5`}
				>
					<li className="list-none text-white active:scale-x-105">
						<a
							className=" before text-lg font-medium"
							href="#home"
							onClick={() => setShow(false)}
						>
							HOME
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a
							className=" before text-lg font-medium"
							href="#about"
							onClick={() => setShow(false)}
						>
							ABOUT
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a
							className=" before text-lg font-medium"
							href="#hire-me"
							onClick={() => setShow(false)}
						>
							HIRE ME
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a
							className=" before text-lg font-medium"
							href="#technologies"
							onClick={() => setShow(false)}
						>
							TECHNOLOGIES
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a
							className=" before text-lg font-medium"
							href="#projects"
							onClick={() => setShow(false)}
						>
							PROJECTS
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a
							className=" before text-sm font-medium"
							href="#contact"
							onClick={() => setShow(false)}
						>
							CONTACT
						</a>
					</li>
					<li
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
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MobileMenu;
