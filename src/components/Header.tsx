import React from "react";

function Header() {
	return (
		<header className="fixed top-5 left-0 w-full z-50 py-1">
			<div className="flex justify-between items-center z-30 max-width">
				<h1 className="cursor-pointer text-white text-2xl font-bold">
					<a href="/">
						KAMAS<span className="text-orange active:scale-105">.DEV</span>
					</a>
				</h1>
				<nav>
					<ul className="flex items-center gap-5">
						<li className="text-white active:scale-x-105 list-none">
							<a className=" text-md font-medium before" href="#home">
								HOME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-md font-medium before" href="#about">
								ABOUT
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-md font-medium before" href="#hire-me">
								HIRE ME
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-md font-medium before" href="#technologies">
								TECHNOLOGIES
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-md font-medium before" href="#projects">
								PROJECTS
							</a>
						</li>
						<li className="text-white active:scale-x-105">
							<a className=" text-md font-medium before" href="#contact">
								CONTACT
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
