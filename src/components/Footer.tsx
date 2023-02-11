import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import git from "../assets/github.svg";
import gitDark from "../assets/github-dark.svg";
import twitter from "../assets/twitter.svg";
import twitterDark from "../assets/twitter-dark.svg";
import linkedin from "../assets/linkedin.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import fem from "../assets/frontend.svg";
import { container, item } from "../animation";
import { delay, motion } from "framer-motion";
function Footer() {
	const year = new Date().getFullYear();

	const { theme } = useContext(ThemeContext);
	return (
		<div className="py-5">
			<div className="max-width">
				<motion.div
					key={7}
					variants={container}
					initial="hidden"
					whileInView="show"
					className={`flex flex-wrap items-center justify-between ${
						theme ? "text-white" : "text-dark-bg"
					} gap-3 py-10`}
				>
					<motion.h1
						variants={item}
						className={`cursor-pointer text-[20px] font-bold ${
							theme ? "text-white" : "text-gray-700"
						} md:text-xl lg:text-2xl`}
					>
						<a href="/">
							KAMAS<span className="text-orange active:scale-105">.DEV</span>
						</a>
					</motion.h1>
					<motion.p variants={item} className="tex-md">
						+2334571065
					</motion.p>
					<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kamasahdickson19@gmail.com">
						<motion.p
							variants={item}
							className="tex-md cursor-pointer transition-colors hover:text-orange"
						>
							kamasahdickson19@gmail.com
						</motion.p>
					</a>
					<motion.div variants={item}>
						<motion.div
							key={8}
							variants={container}
							initial="hidden"
							whileInView="show"
							className="flex items-end justify-center gap-5"
						>
							<a
								href="https://github.com/Kamasah-Dickson"
								title="github profile"
							>
								<motion.img
									variants={item}
									tabIndex={0}
									className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
									src={theme ? git : gitDark}
									alt="github profile"
								/>
							</a>
							<a href="https://twitter.com/Kamas_DEV" title="twitter profile">
								<motion.img
									variants={item}
									tabIndex={0}
									className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
									src={theme ? twitter : twitterDark}
									alt="twitter profile"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/kamasah-dickson-8506a6230/"
								title="linkedin profile"
							>
								<motion.img
									variants={item}
									tabIndex={0}
									className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
									src={theme ? linkedin : linkedinDark}
									alt="linkedin profile"
								/>
							</a>
							<a
								href="https://www.frontendmentor.io/profile/Kamasah-Dickson"
								title="frontendMentor profile"
							>
								<motion.img
									variants={item}
									tabIndex={0}
									className="
                                h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
									src={fem}
									alt="frontendMentor profile"
								/>
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{ opacity: 1, y: "0%", transition: { delay: 2 } }}
					className={`h-[1px] ${
						theme ? "bg-gray-300" : "bg-dark-bg"
					} w-full opacity-20
             `}
				></motion.div>
				<motion.div
					key={8}
					variants={container}
					initial="hidden"
					whileInView="show"
					className="flex flex-col items-center justify-between gap-8 py-10 sm:flex-row"
				>
					<motion.nav variants={item}>
						<motion.ul
							key={9}
							variants={container}
							initial="hidden"
							whileInView="show"
							className="flex flex-wrap items-center justify-center gap-5 sm:justify-start"
						>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#home">
									HOME
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#about">
									ABOUT
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#hire-me">
									HIRE ME
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#technologies">
									TECHNOLOGY
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#projects">
									PROJECTS
								</a>
							</motion.li>
							<motion.li
								variants={item}
								className={`list-none ${
									theme ? "text-white" : "text-gray-700"
								} active:scale-x-105`}
							>
								<a className=" before text-sm font-medium" href="#contact">
									CONTACT
								</a>
							</motion.li>
						</motion.ul>
					</motion.nav>
					<motion.p
						variants={item}
						className={`text-center text-sm ${
							theme ? "text-white" : "text-dark-bg"
						}`}
					>
						Designed and built by
						<span className="text-[#636ED0]"> Kamasah Dickson</span> with
						<span className="text-orange"> love</span>
					</motion.p>
					<motion.p
						variants={item}
						className={`${theme ? "text-white" : "text-dark-bg"} text-center`}
					>
						{`&Copy ${year} All rights reserved`}
					</motion.p>
				</motion.div>
			</div>
		</div>
	);
}

export default Footer;
