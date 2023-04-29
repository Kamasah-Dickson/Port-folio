import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import nft from "../assets/NFT.svg";
import iphone from "../assets/Iphone.svg";
import cinema from "../assets/cinema.svg";
import countries from "../assets/countries.svg";
import form from "../assets/multiForm.webp";
import dashboard from "../assets/Admin-dashboard.jpeg";
import ecommerce from "../assets/let's-Shop.png";
import crypto from "../assets/cryptoExchanger.jpg";
import podcast from "../assets/podcast.png";
import github from "../assets/github2.svg";
import { FiExternalLink } from "react-icons/fi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
function Projects() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={` pt-28 ${
				theme ? "bg-dark-bg" : "bg-[#60585804]"
			} project relative mt-20 overflow-x-hidden `}
			id="projects"
		>
			<div className="overflow-hidden ">
				<motion.h3
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 1, duration: 1 },
					}}
					viewport={{ once: true }}
					className={`z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  mb-3 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
				>
					Projects
				</motion.h3>
				<motion.h4
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 1.2, duration: 1 },
					}}
					viewport={{ once: true }}
					className={`z-10 ${
						!theme ? "text-gray-600" : "text-gray-300"
					}  mb-10 text-center text-xl font-normal uppercase lg:text-2xl`}
				>
					Highlighting My Expertise
				</motion.h4>
			</div>
			<motion.div
				initial={{ opacity: 0, x: "10%" }}
				whileInView={{
					opacity: 1,
					x: "0%",
					transition: { delay: 1.2, duration: 2 },
				}}
				viewport={{ once: true }}
				className="max-width2 relative z-10"
			>
				<Swiper
					className="mt-6 "
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={40}
					breakpoints={{
						1024: {
							slidesPerView: 2,
						},
					}}
					navigation
					pagination={{ clickable: true }}
				>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={ecommerce}
								alt="Let's shop"
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a
									title="Gihub Repo"
									href="https://github.com/Kamasah-Dickson/jubilant-adventure"
								>
									<img
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
										src={github}
										alt="github"
									/>
								</a>

								<a
									title="Let's shop ecommerce"
									href="https://jubilant-adventure.vercel.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={iphone}
								alt=""
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a
									title="Github Repo"
									href="https://github.com/Kamasah-Dickson/Apple-clone"
								>
									<img
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
										src={github}
										alt="github"
									/>
								</a>

								<a
									title="Iphone 14 clone. A basic duplicate of Apple's website"
									href="https://cerulean-fenglisu-2a2e33.netlify.app"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={podcast}
								alt="Mypodcast"
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a
									title="Gihub Repo"
									href="https://github.com/Kamasah-Dickson/podcasting-app"
								>
									<img
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
										src={github}
										alt="github"
									/>
								</a>

								<a
									title="Crypto currency exchanger"
									href="https://main--splendid-lebkuchen-683006.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={crypto}
								alt="Admin dashboard project"
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a
									title="Gihub Repo"
									href="https://github.com/Kamasah-Dickson/CryptoExchange"
								>
									<img
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
										src={github}
										alt="github"
									/>
								</a>

								<a
									title="Crypto currency exchanger"
									href="https://crypto-exchange-u7dc.vercel.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={dashboard}
								alt="Admin dashboard project"
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a
									title="Gihub Repo"
									href="https://github.com/Kamasah-Dickson/Admin-Dashboard"
								>
									<img
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
										src={github}
										alt="github"
									/>
								</a>

								<a
									title="Open Admin Dashboard"
									href="https://celebrated-valkyrie-8f11a1.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={nft}
								alt=""
								className="h-full w-full rounded-[50px] object-cover"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex h-[450px] w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a href="https://github.com/Kamasah-Dickson/NFT-marketplace">
									<img
										title="Github Repo"
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2]"
										src={github}
										alt="github"
									/>
								</a>
								<a
									title="NFT Marketplace. My ability to Unify a theme and bring ideas to live 💡. "
									href="https://sunny-pie-8333c0.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={cinema}
								alt=""
								className="h-full w-full rounded-[50px] object-cover object-top shadow-2xl"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex h-[450px] w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a href="https://github.com/Kamasah-Dickson/Cinema_TypeScript">
									<img
										title="Github Repo"
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2]"
										src={github}
										alt="github"
									/>
								</a>
								<a
									title="Cinema. Working with API's is something I love doing, explore how I work with TMDB"
									href="https://super-dasik-539156.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={countries}
								alt=""
								className="h-full w-full rounded-[50px] object-cover object-top shadow-2xl"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex h-[450px] w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a href="https://github.com/Kamasah-Dickson/Rest-Country-API">
									<img
										title="Github Repo"
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2]"
										src={github}
										alt="github"
									/>
								</a>
								<a
									title="Countries. A web application that provides users with information about countries around the world "
									href="https://startling-crumble-ea6d3d.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<div className="relative h-[450px] overflow-hidden rounded-[50px]">
							<img
								src={form}
								alt=""
								className="h-full w-full rounded-[50px] object-cover object-top shadow-2xl"
							/>
							<div
								className={`absolute bottom-0 top-0 left-0 flex h-[450px] w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
									theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
								} object-cover`}
							>
								<a href="https://github.com/Kamasah-Dickson/React-redesigned-enigma">
									<img
										title="Github Repo"
										className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2]"
										src={github}
										alt="github"
									/>
								</a>
								<a
									title="I call this Hello React. My first React Application. Explore"
									href="https://capable-sable-35c3fa.netlify.app/"
								>
									<FiExternalLink
										size={120}
										className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
									/>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<div className="mt-[50px]"></div>
				</Swiper>
			</motion.div>
		</div>
	);
}

export default Projects;
