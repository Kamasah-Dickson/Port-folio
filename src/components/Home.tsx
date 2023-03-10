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
					<div className=" max-width relative flex h-screen w-full items-center justify-center">
						{/* ===home-img=== */}
						<AnimatePresence>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 3 }}
								className="round-image-sm sm:round-image-md lg:round-image 
                            2xl:round-image2
                            shadow-purple-500
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
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4, ease: "easeIn", delay: 2 }}
								className="intro gradient lg:move-down2 2xl:move-dwn3 mb-[25px] p-5
								text-white
								sm:mb-0 
								"
							>
								<h2 className="mb-3 text-xl font-bold sm:text-2xl">HELLO,</h2>
								<p className="text-md font-light sm:text-lg">
									I’m Kamasah Dickson a frontend developer with a passion for
									delivering intuitive and engaging user experiences. I bring a
									wealth of technical knowledge, and creativity to every
									project.
								</p>
							</motion.div>
						</AnimatePresence>
						{/* ===social-links=== */}
						<AnimatePresence>
							<motion.div
								key={2}
								variants={container}
								initial="hidden"
								whileInView="show"
								className="absolute bottom-[10px] mx-auto  flex items-end justify-center gap-5 py-5 md:right-5 md:h-full md:flex-col"
							>
								<a
									title="github profile"
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
								<a href="https://twitter.com/Kamas_DEV" title="twitter profile">
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
