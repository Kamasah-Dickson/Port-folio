import { Variants } from "framer-motion";

export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.3,
			duration: 3,
		},
	},
};

export const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1.5 } },
};

export const container2 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.13,
			duration: 1,
		},
	},
};

export const item2 = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.2 } },
};
