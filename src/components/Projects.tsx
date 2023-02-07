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
				className={`z-10 relative project ${
					!theme ? "text-dark-bg" : "text-white"
				}  text-3xl md:text-2xl lg:text-4xl uppercase font-semibold mb-3 text-center`}
			>
				Projects
			</h3>
			<h4
				className={`z-10 ${
					!theme ? "text-gray-600" : "text-gray-300"
				}  text-xl lg:text-2xl uppercase font-normal mb-10 text-center`}
			>
				Highlighting My Expertise
			</h4>
			<div className="relative max-width2 overflow-hidden z-10 ">
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
						}         cursor-grab rounded-[50px] w-[300px] `}
					>
						<div>
							<img
								src={iphone}
								alt=""
								className="md:h-[450px] h-[400px] object-cover rounded-[50px] w-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         cursor-grab rounded-[50px] w-[300px] `}
					>
						<div>
							<img
								src={nft}
								alt=""
								className="md:h-[450px] h-[400px] object-cover rounded-[50px] w-full"
							/>
						</div>
					</SwiperSlide>

					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         cursor-grab rounded-[50px] w-[300px]`}
					>
						<img
							src={cinema}
							alt=""
							className="shadow-2xl md:h-[450px] h-[400px] object-cover object-top rounded-[50px] w-full"
						/>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         cursor-grab rounded-[50px] w-[300px]`}
					>
						<img
							src={countries}
							alt=""
							className="shadow-2xl md:h-[450px] h-[400px] object-cover object-top rounded-[50px] w-full"
						/>
					</SwiperSlide>
					<SwiperSlide
						className={`${
							theme ? "my-shadow" : "shadow-2xl"
						}         cursor-grab rounded-[50px] w-[300px]`}
					>
						<img
							src={form}
							alt=""
							className="shadow-2xl md:h-[450px] h-[400px] object-cover object-top rounded-[50px] w-full"
						/>
					</SwiperSlide>
					<div className="mt-[50px]"></div>
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
