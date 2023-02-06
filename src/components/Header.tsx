import React, { useContext, useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import MobileMenu from "./MobileMenu";
import { BiMenuAltLeft } from "react-icons/bi";

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<header
			className={`fixed top-0 shadow-lg left-0 w-full z-50 backdrop-saturate-150 ${
				theme ? "mix-blend-normal filter" : " filter2"
			}`}
		>
			<div className="flex justify-between items-center z-30 max-width h-[75px]">
				<h1 className="cursor-pointer text-white lg:text-2xl md:text-xl text-[20px] font-bold">
					<a href="/">
						KAMAS<span className="text-orange active:scale-105">.DEV</span>
					</a>
				</h1>
				<nav>
					<ul className="hidden md:flex items-center gap-5">
						<li className="text-white active:scale-x-105 list-none">
							<a className=" text-sm font-medium before" href="#home">
								HOME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-sm font-medium before" href="#about">
								ABOUT
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-sm font-medium before" href="#hire-me">
								HIRE ME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-sm font-medium before" href="#technologies">
								TECHNOLOGIES
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-sm font-medium before" href="#projects">
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
					<ul className="md:hidden flex items-center gap-3">
						<li
							className="text-white cursor-pointer list-none"
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
						<li
							className="cursor-pointer list-none"
							onClick={() => setShow(true)}
						>
							<BiMenuAltLeft color="white" size={25} />
						</li>
					</ul>
				</nav>

				<MobileMenu show={show} setShow={setShow} />
			</div>
		</header>
	);
}

export default Header;
