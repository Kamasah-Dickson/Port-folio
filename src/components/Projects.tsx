import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import github from "../assets/github2.svg";
import { FiExternalLink } from "react-icons/fi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { projectData } from "../Projects";
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
						transition: { delay: 0.4, duration: 1.2 },
					}}
					// viewport={{ once: true }}
					className={`z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  mb-1 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
				>
					Projects
				</motion.h3>
				<motion.h4
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 0.6, duration: 1.1 },
					}}
					// viewport={{ once: true }}
					className={`z-10 ${
						!theme ? "text-gray-600" : "text-gray-300"
					}  mb-10 text-center text-xl font-normal uppercase lg:text-2xl`}
				>
					Highlighting My Expertise
				</motion.h4>
			</div>
			<motion.div
				initial={{ opacity: 0, x: "30%" }}
				whileInView={{
					x: "0%",
					opacity: 1,
					transition: { delay: 0.6, duration: 2 },
				}}
				viewport={{ once: true }}
				className="relative z-10 mx-auto max-w-7xl px-[0.625rem]"
			>
				<Swiper
					className="mt-6 select-none "
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
					{projectData.map((project) => {
						return (
							<SwiperSlide
								key={project.projectTitle}
								className={`${
									theme ? "my-shadow" : "shadow-2xl"
								}         w-[300px] cursor-grab rounded-[50px] `}
							>
								<div className="relative h-[450px] overflow-hidden rounded-[50px]">
									<img
										src={project.img}
										alt={project.imgAlt}
										className="h-full w-full rounded-[50px] object-cover"
									/>
									<div
										className={`absolute bottom-0 top-0 left-0 flex w-[100%] items-center justify-center gap-10 rounded-[50px] opacity-0 transition-all hover:opacity-100 ${
											theme ? "hover:bg-[#c77d4c3f]" : "hover:bg-[#80008041]"
										} object-cover`}
									>
										<a
											title="Gihub Repo"
											href={project.githubLink}
											target="_blank"
										>
											<img
												className="h-[120] w-[120] cursor-pointer transition-all hover:scale-[1.2] "
												src={github}
												alt="github"
											/>
										</a>

										<a
											title={project.projectTitle}
											href={project.projectLink}
											target="_blank"
										>
											<FiExternalLink
												size={120}
												className="transition-all hover:scale-[1.2] hover:text-white hover:drop-shadow-lg"
											/>
										</a>
									</div>
								</div>
							</SwiperSlide>
						);
					})}

					<div className="mt-[50px]"></div>
				</Swiper>
			</motion.div>
		</div>
	);
}

export default Projects;
