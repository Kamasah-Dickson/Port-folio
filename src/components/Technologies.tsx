import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { techStacks } from "../technologies";

function Technologies() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className=" tech relative h-full overflow-hidden pt-40 pb-40"
			id="technologies"
		>
			<div className="overflow-hidden">
				<motion.h3
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 0.4, duration: 1.1 },
					}}
					// viewport={{ once: true }}
					className={`relative z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  mb-1 text-center text-3xl font-semibold uppercase md:text-2xl lg:text-5xl`}
				>
					MY TECH STACK
				</motion.h3>
				<motion.h5
					initial={{ opacity: 0, y: "100%" }}
					whileInView={{
						opacity: 1,
						y: "0",
						transition: { delay: 0.9, duration: 1.1 },
					}}
					// viewport={{ once: true }}
					className={`relative z-10 ${
						!theme ? "text-dark-bg" : "text-white"
					}  px-1 text-center text-lg font-medium uppercase`}
				>
					TECHNOLOGIES I'VE BEEN WORKING WITH
				</motion.h5>
			</div>
			<motion.div
				key={6}
				variants={container}
				initial="hidden"
				whileInView="show"
				// viewport={{ once: true }}
				className="
				my-grid2
				relative
					z-10
					mx-auto
				mt-16 flex h-full max-w-7xl flex-wrap gap-5 px-3"
			>
				{techStacks.map((tech) => {
					return (
						<motion.a
							variants={item}
							href={tech.link}
							target="_blank"
							title={tech.title}
							className="transition-all hover:scale-[1.04] active:scale-95"
							key={tech.link}
						>
							<img src={tech.img} alt={tech.title} />
						</motion.a>
					);
				})}
			</motion.div>
		</div>
	);
}

export default Technologies;
