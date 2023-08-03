import react from "./assets/react.svg";
import javaScript from "./assets/JS.svg";
import typeScript from "./assets/Typescript.svg";
import framer from "./assets/framerMotion.svg";
import sass from "./assets/sass.svg";
import redux from "./assets/REDUX.svg";
import git from "./assets/git.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import github from "./assets/github2.svg";
import tailwind from "./assets/tailwind.svg";
import nextJs from "./assets/next-js.svg";
import firebase from "./assets/firebase.svg";

interface Itech {
	img: string;
	title: string;
	link: string;
}

export const techStacks: Itech[] = [
	{
		img: react,
		title: "React",
		link: "https://reactjs.org/",
	},
	{
		img: javaScript,
		title: "JavaScript",
		link: "https://www.javascript.com/",
	},
	{
		img: typeScript,
		title: "TypeScript",
		link: "https://www.typescriptlang.org/",
	},
	{
		img: sass,
		title: "Sass",
		link: "https://sass-lang.com/",
	},
	{
		img: nextJs,
		title: "NextJs",
		link: "https://nextjs.org/",
	},
	{
		img: redux,
		title: "Redux",
		link: "https://redux.js.org/",
	},
	{
		img: git,
		title: "Git",
		link: "https://git-scm.com/",
	},
	{
		img: html,
		title: "HTML",
		link: "https://www.w3schools.com/html/",
	},
	{
		img: firebase,
		title: "Firebase",
		link: "https://firebase.google.com/",
	},
	{
		img: css,
		title: "CSS",
		link: "https://www.w3schools.com/Css//",
	},
	{
		img: github,
		title: "Github",
		link: "https://github.com/Kamasah-Dickson",
	},
	{
		img: framer,
		title: "Framer motion",
		link: "https://www.framer.com/motion/",
	},
	{
		img: tailwind,
		title: "Tailwind Css",
		link: "https://tailwindcss.com/",
	},
];
