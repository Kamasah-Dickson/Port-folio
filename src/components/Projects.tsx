import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import nft from "../assets/NFT.svg";
import iphone from "../assets/Iphone.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="h-screen my-[70px] pt-28 overflow-x-hidden" id="projects">
			<h3
				className={`z-10 relative project ${
					!theme ? "text-dark-bg" : "text-white"
				}  text-3xl md:text-2xl lg:text-4xl uppercase font-semibold mb-10 text-center`}
			>
				Projects
			</h3>
			{/* <h4>From Products,Fun and Explore</h4> */}
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={40}
				// slidesPerView={3}
				breakpoints={{
					600: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 2,
					},
					1000: {
						slidesPerView: 3,
					},
				}}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide
					className={`${
						theme ? "my-shadow" : "shadow-2xl"
					}         cursor-grab rounded-[50px] w-full `}
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
						theme ? "my-shadow-red" : "shadow-2xl"
					}         cursor-grab rounded-[50px] w-full `}
				>
					<img
						src={nft}
						alt=""
						className=" shadow-2xl md:h-[450px] h-[400px] object-cover rounded-[50px] w-full"
					/>
				</SwiperSlide>
				<SwiperSlide
					className={`${
						theme ? "my-shadow" : "shadow-2xl"
					}        cursor-grab rounded-[50px] w-full`}
				>
					<img
						src={nft}
						alt=""
						className="shadow-2xl md:h-[450px] h-[400px] object-cover rounded-[50px] w-full "
					/>
				</SwiperSlide>
				<SwiperSlide
					className={`${
						theme ? "my-shadow" : "shadow-2xl"
					}         cursor-grab rounded-[50px] w-full`}
				>
					<img
						src={nft}
						alt=""
						className="shadow-2xl md:h-[450px] h-[400px] object-cover rounded-[50px] w-full"
					/>
				</SwiperSlide>
				<div className="mt-[50px]"></div>
			</Swiper>
		</div>
	);
}

export default Projects;
