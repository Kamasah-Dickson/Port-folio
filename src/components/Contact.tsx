import React, { useContext } from "react";
import phone from "../assets/CALL.svg";
import email from "../assets/EMAIL.svg";
import emailDark from "../assets/EMAIL-dark.svg";
import phoneDark from "../assets/CALL-dark.svg";
import contactSvg from "../assets/contact.svg";
import contactSvgLight from "../assets/contact-light-mode.svg";
import { ThemeContext } from "../context/ThemeContext";
function Contact() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			id="contact"
			className={`${theme ? "bg-contact" : "bg-white"}  mt-[50px]  py-[50px]`}
		>
			<div className="contact-grid max-width contact relative overflow-hidden">
				<div className={`${theme ? "text-white" : "text-dark-bg"}`}>
					<h3 className="mb-3 px-3 text-left text-4xl font-bold">Contact</h3>
					<p className="text-md mb-6 max-w-md px-3  font-light">
						For business and partnership inquiry please contact me below!
					</p>
					<div className="mt-10 flex flex-col gap-5">
						<div className="flex items-center gap-5 p-3">
							<img src={theme ? phone : phoneDark} alt="call" />
							<div className="flex flex-col gap-[3px]">
								<h4 className="text-sm font-semibold">PHONE</h4>
								<p className="text-md font-light">+2335945710</p>
							</div>
						</div>
						<div className="flex w-fit cursor-pointer items-center gap-5 rounded-sm p-3 shadow-sm transition-shadow hover:bg-[#584eac38]">
							<img src={theme ? email : emailDark} alt="" />
							<div className="flex flex-col gap-[3px]">
								<h4 className="text-sm font-semibold">EMAIL</h4>
								<p className="text-md font-light">kamasahdickson19@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="ml-auto">
					<img src={theme ? contactSvg : contactSvgLight} alt="contact" />
				</div>
			</div>
		</div>
	);
}

export default Contact;
