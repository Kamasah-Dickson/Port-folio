import React, { useContext } from "react";
import Header from "./Header";
import me from "../assets/EgLF6Jmi_4x.jpg";
import git from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import fem from "../assets/frontend.svg";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animation";
import { GiCloudDownload } from "react-icons/gi";
import resume from "../Resume.pdf";

function Home() {
	const { theme } = useContext(ThemeContext);
	document.body.className = `${theme ? "bg-dark-bg" : "bg-white"}`;

	return (
		<>
			<div
				id="home"
				className={`min-h-screen w-full  ${
					theme ? "background-dark" : "background-light"
				}`}
			>
				<Header />
				<div className="flex h-full items-start justify-center">
					{/* ===container=== */}
					<div
						className=" 
					relative
					mx-auto
					flex
					h-screen w-full max-w-7xl items-center justify-center px-3"
					>
						{/* ===home-img=== */}
						<AnimatePresence>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 3 }}
								className="h-[18.25rem] w-[18.25rem] rounded-full shadow-purple-500 sm:h-[25.25rem] sm:w-[25.25rem] lg:h-[33.25rem] lg:w-[33.25rem]
                            2xl:h-[50.25rem]
                            2xl:w-[50.25rem]
							"
							>
								<img
									className="h-full w-full rounded-full"
									src={me}
									alt="Imagine"
								/>
							</motion.div>
						</AnimatePresence>
						{/* ===intro=== */}
						<AnimatePresence>
							<motion.div
								key={1}
								initial={{ opacity: 0, translateY: 15 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{ duration: 0.8, ease: "easeIn", delay: 1.5 }}
								className="gradient absolute bottom-16 left-[0.625rem] mb-[50px] max-w-md rounded-[0.625rem] p-5 text-white
								sm:mb-0
								md:mb-[25px] lg:bottom-36
								"
							>
								<h2 className="mb-3 text-xl font-bold sm:text-2xl">HELLO,</h2>
								<p className="text-md font-light sm:text-lg">
									I'm Kamasah Dickson a Frontend developer with passion for
									delivering intuitive and engaging user experiences. I bring a
									wealth of technical knowledge and creativity to every project.
								</p>
								<motion.a
									href={resume}
									download={"Kamasah-Dickson_Resume.pdf"}
									initial={{ opacity: 0, translateY: 5 }}
									animate={{ opacity: 1, translateY: 0 }}
									transition={{ duration: 0.9, ease: "easeInOut", delay: 3 }}
									className="mt-5 flex w-fit cursor-pointer items-center gap-2"
									title="download resume"
								>
									<GiCloudDownload
										color="White"
										size={30}
										className="
										my-animation2 
										"
									/>
									<p className=" my-animation font-bold active:scale-[1.03] ">
										Download CV
									</p>
								</motion.a>
							</motion.div>
						</AnimatePresence>
						{/* ===social-links=== */}
						<AnimatePresence>
							<motion.div
								key={2}
								variants={container}
								initial="hidden"
								whileInView="show"
								className="absolute bottom-[10px] mx-auto flex items-end justify-center gap-5 py-5 md:right-5 md:h-full md:flex-col"
							>
								<a
									title="github profile"
									target="_blank"
									href="https://github.com/Kamasah-Dickson"
								>
									<motion.img
										variants={item}
										tabIndex={0}
										className="mw-10 h-10
									cursor-pointer transition-all hover:scale-110 active:scale-95"
										src={git}
										alt="github profile"
									/>
								</a>
								<a
									href="https://twitter.com/Kamas_DEV"
									target="_blank"
									title="twitter profile"
								>
									<motion.img
										variants={item}
										tabIndex={0}
										className=" h-10 w-10
                                cursor-pointer transition-all hover:scale-110 active:scale-95"
										src={twitter}
										alt="twitter profile"
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/kamasah-dickson-8506a6230/"
									target="_blank"
									title="linkedin profile"
								>
									<motion.img
										variants={item}
										tabIndex={0}
										className=" h-10 w-10
									cursor-pointer transition-all hover:scale-110 active:scale-95"
										src={linkedin}
										alt="linkedin profile"
									/>
								</a>
								<a
									href="https://www.frontendmentor.io/profile/Kamasah-Dickson"
									target="_blank"
									title="frontendMentor profile"
								>
									<motion.img
										variants={item}
										tabIndex={0}
										className="
									h-10 w-10
									cursor-pointer transition-all hover:scale-110 active:scale-95"
										src={fem}
										alt="frontendMentor profile"
									/>
								</a>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
