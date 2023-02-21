import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			id="about"
			className={`section-bg ${
				!theme ? "bg-gray-100" : "bg-dark-bg"
			} h-[600px] overflow-hidden `}
		>
			{/* ====overlay==== */}
			<div
				className={`absolute right-0  top-0 -z-10 h-[100%] ${
					theme ? "w-[50%]" : "w-[100%]"
				} sm:w-[50%] `}
			>
				{/* ===img=== */}
				<div className={`${theme ? "overlay-dark" : "overlay-light"}`}></div>
			</div>
			<div className="max-width relative h-full">
				<motion.div
					initial={{ opacity: 0, y: "25%" }}
					whileInView={{ opacity: 1, y: "0%", transition: { duration: 0.8 } }}
					viewport={{ once: true }}
					transition={{ duration: 2 }}
					className={`relative top-36 -z-10 max-w-xl rounded-lg p-7 md:left-24 md:max-w-lg lg:left-32 ${
						theme ? "opa-bg" : "opa-bg-2"
					}`}
				>
					<h2 className="relative z-10 mb-3 text-left text-3xl font-semibold uppercase text-white md:text-2xl lg:text-4xl ">
						About
					</h2>
					<p className="z-10 font-light text-gray-200">
						I am an individual who strive to stay at the forefront of industry
						trends and advancements, constantly seeking new and innovative ways
						to deliver value to my clients. Whether you are looking for a
						partner to help bring your vision to life, or simply need a reliable
						and skilled frontend developer to take your project to the next
						level, I am here to help. Let's work together to create something
						truly amazing."
					</p>
				</motion.div>

				<Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kamasahdickson19@gmail.com">
					<motion.button
						type="button"
						className={`absolute bottom-10 ${
							theme ? "bg-white text-dark-bg" : "bg-dark-bg text-white"
						} my-hover rounded-md py-3 px-6 font-medium shadow-md`}
						initial={{ opacity: 0, y: "30%" }}
						whileInView={{
							opacity: 1,
							y: "0%",
							transition: { duration: 0.8, delay: 0.5 },
						}}
						viewport={{ once: true }}
					>
						Hire Me
					</motion.button>
				</Link>
			</div>
		</div>
	);
}

export default About;
