import React, { useContext } from "react";
import Header from "./Header";
import me from "../assets/EgLF6Jmi_4x.jpg";
import git from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import fem from "../assets/frontend.svg";
import { ThemeContext } from "../context/ThemeContext";

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
						<div
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
						</div>
						{/* ===intro=== */}
						<div
							className="intro gradient lg:move-down2 2xl:move-dwn3 
                            p-5
                            text-white
                        "
						>
							<h2 className="mb-3 text-xl font-bold sm:text-2xl">HELLO,</h2>
							<p className="text-md font-light sm:text-lg">
								I’m Kamasah Dickson a frontend developer with a passion for
								delivering intuitive and engaging user experiences. I bring a
								wealth of technical knowledge, and creativity to every project.
							</p>
						</div>
						{/* ===social-links=== */}
						<div className="absolute bottom-0 mx-auto  flex items-end justify-center gap-5 py-5 md:right-5 md:h-full md:flex-col">
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={git}
								alt="github profile"
							/>
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={twitter}
								alt="twitter profile"
							/>
							<img
								tabIndex={0}
								className="h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={linkedin}
								alt="linkedin profile"
							/>
							<img
								tabIndex={0}
								className="
                                h-8 w-8 cursor-pointer transition-all
                                hover:scale-110 active:scale-95 md:h-10 md:w-10"
								src={fem}
								alt="frontendMentor profile"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
