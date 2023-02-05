import React from "react";
import Header from "./Header";
import me from "../assets/EgLF6Jmi_4x.jpg";
import git from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import fem from "../assets/frontend.svg";

function Home() {
	return (
		<>
			<div className="min-h-screen w-full background-dark">
				<Header />
				<div className="flex h-full items-start justify-center">
					{/* ===container=== */}
					<div className=" relative h-screen flex justify-center items-center w-full max-width">
						{/* ===home-img=== */}
						<div
							className="round-image-sm sm:round-image-md lg:round-image 
                            2xl:round-image2
                            shadow-purple-500
                        "
						>
							<img
								className="w-full h-full rounded-full"
								src={me}
								alt="Imagine"
							/>
						</div>
						{/* ===intro=== */}
						<div
							className="intro p-5 gradient text-white 
                            lg:move-down2
                            2xl:move-dwn3
                        "
						>
							<h2 className="font-bold sm:text-2xl text-xl mb-3">HELLO,</h2>
							<p className="font-light text-md sm:text-lg">
								I’m Kamasah Dickson a frontend developer with a passion for
								delivering intuitive and engaging user experiences. I bring a
								wealth of technical knowledge, and creativity to every project.
							</p>
						</div>
						{/* ===social-links=== */}
						<div className="flex items-end justify-center  mx-auto gap-5 py-5 absolute bottom-0 md:flex-col md:right-5 md:h-full">
							<img
								className="cursor-pointer hover:scale-110 transition-all active:scale-95
                                w-8 h-8 md:w-10 md:h-10"
								src={git}
								alt="github"
							/>
							<img
								className="cursor-pointer hover:scale-110 transition-all active:scale-95
                                w-8 h-8 md:w-10 md:h-10"
								src={twitter}
								alt="twitter"
							/>
							<img
								className="cursor-pointer hover:scale-110 transition-all active:scale-95
                                w-8 h-8 md:w-10 md:h-10"
								src={linkedin}
								alt="linkedin"
							/>
							<img
								className="
                                cursor-pointer hover:scale-110 transition-all active:scale-95
                                w-8 h-8 md:w-10 md:h-10"
								src={fem}
								alt="frontendMentor.io"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
