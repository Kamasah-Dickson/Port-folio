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
			} min-h-screen w-4/5 fixed top-0 right-0 z-50 md:hidden text-white transition-transform`}
		>
			<nav
				className={`${theme ? "bg-dark-bg" : "bg-gray-900"} bg-opacity-[0.97]`}
			>
				<div
					className="absolute top-12 cursor-pointer right-7"
					onClick={() => setShow(false)}
				>
					<IoMdCloseCircle size={30} />
				</div>
				<ul
					className={`flex flex-col h-screen w-full items-center justify-center gap-5`}
				>
					<li className="text-white active:scale-x-105 list-none">
						<a className=" text-lg font-medium before" href="#home">
							HOME
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a className=" text-lg font-medium before" href="#about">
							ABOUT
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a className=" text-lg font-medium before" href="#hire-me">
							HIRE ME
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a className=" text-lg font-medium before" href="#technologies">
							TECHNOLOGIES
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a className=" text-lg font-medium before" href="#projects">
							PROJECTS
						</a>
					</li>
					<li className="text-white active:scale-x-105">
						<a className=" text-sm font-medium before" href="#contact">
							CONTACT
						</a>
					</li>
					<li
						className="text-white cursor-pointer"
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
