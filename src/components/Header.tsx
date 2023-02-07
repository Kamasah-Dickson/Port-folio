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
			className={`fixed top-0 left-0 z-50 w-full shadow-lg backdrop-saturate-150 ${
				theme ? "mix-blend-normal filter" : " filter2"
			}`}
		>
			<div className="max-width z-30 flex h-[75px] items-center justify-between">
				<h1 className="cursor-pointer text-[20px] font-bold text-white md:text-xl lg:text-2xl">
					<a href="/">
						KAMAS<span className="text-orange active:scale-105">.DEV</span>
					</a>
				</h1>
				<nav>
					<ul className="hidden items-center gap-5 md:flex">
						<li className="list-none text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#home">
								HOME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#about">
								ABOUT
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#hire-me">
								HIRE ME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#technologies">
								TECHNOLOGIES
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#projects">
								PROJECTS
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" before text-sm font-medium" href="#contact">
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
					<ul className="flex items-center gap-3 md:hidden">
						<li
							className="cursor-pointer list-none text-white"
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
