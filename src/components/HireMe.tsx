import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import chatDark from "../assets/CHAT-dark.svg";
import chatLight from "../assets/CHAT.svg";
import likeDark from "../assets/cooperation-dark.svg";
import likeLight from "../assets/cooperation.svg";
import workDark from "../assets/WORK-dark.svg";
import workLight from "../assets/WORK.svg";
import PerfectDark from "../assets/perfectionist-dark.svg";
import PerfectLight from "../assets/perfectionist.svg";
import { container, item } from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HireMe() {
	const { theme } = useContext(ThemeContext);
	return (
		<div id="hire-me" className="why-hire relative py-[50px]">
			<div
				className="mb-14 overflow-hidden
			"
			>
				<motion.h3
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 0.5, duration: 1.2 },
					}}
					viewport={{ once: true }}
					className={`relative z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}   text-center text-3xl font-semibold uppercase md:text-2xl lg:text-4xl`}
				>
					WHY HIRE ME
				</motion.h3>
			</div>
			<motion.div
				key={6}
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="max-width my-grid relative z-10 h-full "
			>
				<motion.div variants={item} className="text-center">
					<img
						className="m-auto"
						src={theme ? chatDark : chatLight}
						alt="communicative"
					/>
					<h3
						className={`${
							theme ? "text-white" : "text-dark-bg"
						} my-3 text-2xl font-medium md:text-3xl
						`}
					>
						Communicative
					</h3>
					<p
						className={`${
							theme ? "text-gray-400" : "text-dark-bg"
						} my-3 text-lg font-light
						`}
					>
						I have a broad understanding of verbal vocabulary. Therefore, I can
						convey a message well among peers.
					</p>
				</motion.div>
				<motion.div variants={item} className="text-center">
					<img
						className="m-auto"
						src={theme ? likeDark : likeLight}
						alt="cooperative"
					/>
					<h3
						className={`${
							theme ? "text-white" : "text-dark-bg"
						} my-3 text-2xl font-medium md:text-3xl
						`}
					>
						Cooperative
					</h3>
					<p
						className={`${
							theme ? "text-gray-400" : "text-dark-bg"
						} my-3 text-lg font-light
						`}
					>
						Behind the successful projects, there’s a great team. I can build a
						good cooperation and remain consistent with the goal.
					</p>
				</motion.div>
				<motion.div variants={item} className="text-center">
					<img
						className="m-auto"
						src={theme ? workDark : workLight}
						alt="workaholic"
					/>
					<h3
						className={`${
							theme ? "text-white" : "text-dark-bg"
						} my-3 text-2xl font-medium md:text-3xl
						`}
					>
						Workaholic
					</h3>
					<p
						className={`${
							theme ? "text-gray-400" : "text-dark-bg"
						} my-3 text-lg font-light
						`}
					>
						I’m a kind of person who can’t stand around doing nothing. I have a
						tendency of doing something productive.
					</p>
				</motion.div>
				<motion.div variants={item} className="text-center">
					<img
						className="m-auto"
						src={theme ? PerfectDark : PerfectLight}
						alt="perfectionist"
					/>
					<h3
						className={`${
							theme ? "text-white" : "text-dark-bg"
						} my-3 text-2xl font-medium md:text-3xl
						`}
					>
						Perfectionist
					</h3>
					<p
						className={`${
							theme ? "text-gray-400" : "text-dark-bg"
						} my-3 text-lg font-light
						`}
					>
						I have a strong intuition and have remained consistent with high
						quality standards to present a most worthy results.
					</p>
				</motion.div>
			</motion.div>
			<Link to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kamasahdickson19@gmail.com">
				<motion.button
					type="button"
					className={` mx-auto mt-5 flex items-center  justify-center ${
						theme ? "bg-white text-dark-bg" : "bg-dark-bg text-white"
					} my-hover rounded-md py-3 px-6 font-medium shadow-md`}
					initial={{ opacity: 0, y: "30%" }}
					whileInView={{
						opacity: 1,
						y: "0%",
						transition: { duration: 0.8 },
					}}
					viewport={{ once: true }}
				>
					Hire Me
				</motion.button>
			</Link>
		</div>
	);
}

export default HireMe;
