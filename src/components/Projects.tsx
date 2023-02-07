import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import nft from "../assets/NFT.svg";
import iphone from "../assets/Iphone.svg";
import cinema from "../assets/cinema.svg";
import countries from "../assets/countries.svg";
import form from "../assets/form.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={` pt-28 ${
				theme ? "bg-dark-bg" : "bg-[#60585804]"
			} overflow-x-hidden`}
			id="projects"
		>
			<h3
				className={`project relative z-10 ${
					!theme ? "text-dark-bg" : "text-white"
				}  mb-3 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
			>
				Projects
			</h3>
			<h4
				className={`z-10 ${
					!theme ? "text-gray-600" : "text-gray-300"
				}  mb-10 text-center text-xl font-normal uppercase lg:text-2xl`}
			>
				Highlighting My Expertise
			</h4>
			<div className="max-width2 relative z-10 overflow-hidden ">
				<Swiper
					className="mt-6"
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={40}
					// slidesPerView={3}
					breakpoints={{
						700: {
							slidesPerView: 2,
						},
						900: {
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
						<div>
							<img
								src={iphone}
								alt=""
								className="h-[400px] w-full rounded-[50px] object-cover md:h-[450px]"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px] `}
					>
						<div>
							<img
								src={nft}
								alt=""
								className="h-[400px] w-full rounded-[50px] object-cover md:h-[450px]"
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<img
							src={cinema}
							alt=""
							className="h-[400px] w-full rounded-[50px] object-cover object-top shadow-2xl md:h-[450px]"
						/>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<img
							src={countries}
							alt=""
							className="h-[400px] w-full rounded-[50px] object-cover object-top shadow-2xl md:h-[450px]"
						/>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         w-[300px] cursor-grab rounded-[50px]`}
					>
						<img
							src={form}
							alt=""
							className="h-[400px] w-full rounded-[50px] object-cover object-top shadow-2xl md:h-[450px]"
						/>
					</SwiperSlide>
					<div className="mt-[50px]"></div>
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
