import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import git from "../assets/github.svg";
import gitDark from "../assets/github-dark.svg";
import twitter from "../assets/twitter.svg";
import twitterDark from "../assets/twitter-dark.svg";
import linkedin from "../assets/linkedin.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import fem from "../assets/frontend.svg";

function Footer() {
	const year = new Date().getFullYear();

	const { theme } = useContext(ThemeContext);
	return (
		<div className="py-5">
			<div className="max-width">
				<div
					className={`flex flex-wrap items-center justify-between ${
						theme ? "text-white" : "text-dark-bg"
					} gap-3 py-10`}
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
					<p className="tex-md">+2334571065</p>
					<p className="tex-md cursor-pointer transition-colors hover:text-orange">
						kamasahdickson19@gmail.com
					</p>
					<div>
						<div className="flex items-end justify-center gap-5">
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={theme ? git : gitDark}
								alt="github profile"
							/>
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={theme ? twitter : twitterDark}
								alt="twitter profile"
							/>
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={theme ? linkedin : linkedinDark}
								alt="linkedin profile"
							/>
							<img
								tabIndex={0}
								className="
                                h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={fem}
								alt="frontendMentor profile"
							/>
						</div>
					</div>
				</div>
				<div
					className={`h-[1px] ${
						theme ? "bg-gray-300" : "bg-dark-bg"
					} w-full opacity-20
             `}
				></div>
				<div className="flex flex-col items-center justify-between gap-8 py-10 sm:flex-row">
					<nav>
						<ul className="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#home">
									HOME
								</a>
							</li>
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#about">
									ABOUT
								</a>
							</li>
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#hire-me">
									HIRE ME
								</a>
							</li>
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#technologies">
									TECHNOLOGY
								</a>
							</li>
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#projects">
									PROJECTS
								</a>
							</li>
							<li
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#contact">
									CONTACT
								</a>
							</li>
						</ul>
					</nav>
					<p
						className={`text-center text-sm ${
							theme ? "text-white" : "text-dark-bg"
						}`}
					>
						Designed and built by
						<span className="text-[#636ED0]"> Kamasah Dickson</span> with
						<span className="text-orange"> love</span>
					</p>
					<p className={`${theme ? "text-white" : "text-dark-bg"} text-center`}>
						@Copy {year} All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;