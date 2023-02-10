import React, { useContext } from "react";
import phone from "../assets/CALL.svg";
import email from "../assets/EMAIL.svg";
import emailDark from "../assets/EMAIL-dark.svg";
import phoneDark from "../assets/CALL-dark.svg";
import contactSvg from "../assets/contact.svg";
import contactSvgLight from "../assets/contact-light-mode.svg";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
function Contact() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			id="contact"
			className={`${theme ? "bg-contact" : "bg-white"}  mt-[50px]  py-[50px]`}
		>
			<div className="contact-grid max-width contact relative overflow-hidden">
				<div className={`${theme ? "text-white" : "text-dark-bg"}`}>
					<div className="overflow-hidden pb-6">
						<motion.h3
							initial={{ opacity: 0, y: "100%" }}
							whileInView={{
								opacity: 1,
								y: "0",
								transition: { delay: 1, duration: 1 },
							}}
							viewport={{ once: true }}
							className="mb-3 px-3 text-left text-4xl font-bold"
						>
							Contact
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: "100%" }}
							whileInView={{
								opacity: 1,
								y: "0",
								transition: { delay: 1.2, duration: 1 },
							}}
							viewport={{ once: true }}
							className="text-md  max-w-md px-3  font-light"
						>
							For business and partnership inquiry please contact me below!
						</motion.p>
					</div>
					<div className="mt-10 flex flex-col gap-5">
						<div>
							<motion.div
								initial={{ opacity: 0, y: "100%" }}
								whileInView={{
									opacity: 1,
									y: "0",
									transition: { delay: 1.5, duration: 1 },
								}}
								viewport={{ once: true }}
								className="flex items-center gap-5 p-3"
							>
								<img src={theme ? phone : phoneDark} alt="call" />
								<div className="flex flex-col gap-[3px]">
									<h4 className="text-sm font-semibold">PHONE</h4>
									<p className="text-md font-light">+2335945710</p>
								</div>
							</motion.div>
						</div>
						<motion.div
							initial={{ opacity: 0, y: "100%" }}
							whileInView={{
								opacity: 1,
								y: "0",
								transition: { delay: 1.7, duration: 1 },
							}}
							viewport={{ once: true }}
							className={`flex w-fit cursor-pointer items-center gap-5 rounded-sm border ${
								theme
									? "bg-[#584eac38]  hover:bg-[#574eac0e]  active:bg-slate-900"
									: "bg-gray-100 hover:bg-gray-300 active:bg-gray-200"
							} p-3 shadow-sm transition-shadow `}
						>
							<img src={theme ? email : emailDark} alt="" />
							<div className="flex flex-col gap-[3px]">
								<h4 className="text-sm font-semibold">EMAIL</h4>
								<p className="text-md font-light">kamasahdickson19@gmail.com</p>
							</div>
						</motion.div>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: "20%" }}
					whileInView={{
						opacity: 1,
						x: "0%",
						transition: { delay: 2, duration: 1 },
					}}
					viewport={{ once: true }}
					className="ml-auto"
				>
					<img src={theme ? contactSvg : contactSvgLight} alt="contact" />
				</motion.div>
			</div>
		</div>
	);
}

export default Contact;
