// import nft from "./src/assets/NFT.svg";
import nft from "./assets/NFT.svg";
import iphone from "./assets/Iphone.svg";
import cinema from "./assets/cinema.svg";
import countries from "./assets/countries.svg";
import form from "./assets/multiForm.webp";
import dashboard from "./assets/Admin-dashboard.jpeg";
import ecommerce from "./assets/let's-Shop.png";
import rollingboard from "./assets/rollingboard.png";
import crypto from "./assets/cryptoExchanger.jpg";
import chatApp from "./assets/chatApp.jpg";
import podcast from "./assets/podcast.png";

interface Iproject {
	img: string;
	imgAlt: string;
	githubLink: string;
	projectTitle: string;
	projectLink: string;
}

export const projectData: Iproject[] = [
	{
		img: ecommerce,
		imgAlt: `Let's shop`,
		githubLink: "https://github.com/Kamasah-Dickson/jubilant-adventure",
		projectTitle: `Let's shop ecommerce`,
		projectLink: `https://jubilant-adventure.vercel.app/`,
	},
	{
		img: iphone,
		imgAlt: `Apple.com clone`,
		githubLink: "https://github.com/Kamasah-Dickson/Apple-clone",
		projectTitle: `Iphone 14 clone. A basic duplicate of Apple's website`,
		projectLink: `https://cerulean-fenglisu-2a2e33.netlify.app`,
	},
	{
		img: rollingboard,
		imgAlt: `Rollingboard`,
		githubLink: "https://github.com/Kamasah-Dickson/Rollingboard",
		projectTitle: `Rollingboard:-Collaborate, create and build faster together`,
		projectLink: `https://next-crud-rust.vercel.app/`,
	},
	{
		img: chatApp,
		imgAlt: `Let's chat`,
		githubLink: "https://github.com/Kamasah-Dickson/Let-s-chat",
		projectTitle: `Let's chat a convinient way of connecting`,
		projectLink: `https://let-s-chat-gamma.vercel.app/`,
	},
	{
		img: podcast,
		imgAlt: `Mypodcast`,
		githubLink: "https://github.com/Kamasah-Dickson/podcasting-app",
		projectTitle: `Podcast:- Listen to your favourite podcasts`,
		projectLink: `https://main--splendid-lebkuchen-683006.netlify.app/`,
	},
	{
		img: crypto,
		imgAlt: `CryptoExchanger`,
		githubLink: "https://github.com/Kamasah-Dickson/CryptoExchange",
		projectTitle: `Crypto currency exchanger`,
		projectLink: `https://crypto-exchange-u7dc.vercel.app/`,
	},
	{
		img: dashboard,
		imgAlt: `Admin dashboard`,
		githubLink: "https://github.com/Kamasah-Dickson/Admin-Dashboard",
		projectTitle: `Admin Dashboard`,
		projectLink: `https://celebrated-valkyrie-8f11a1.netlify.app/`,
	},
	{
		img: nft,
		imgAlt: `Non-fungible token NFT`,
		githubLink: "https://github.com/Kamasah-Dickson/NFT-marketplace",
		projectTitle: `NFT Marketplace. My ability to Unify a theme and bring ideas to live 💡.`,
		projectLink: `https://sunny-pie-8333c0.netlify.app/`,
	},
	{
		img: cinema,
		imgAlt: `CinemaHD`,
		githubLink: "https://github.com/Kamasah-Dickson/Cinema_TypeScript",
		projectTitle: `Cinema.watch your favorite cinema movies for free`,
		projectLink: `https://super-dasik-539156.netlify.app/`,
	},
	{
		img: countries,
		imgAlt: `Countries`,
		githubLink: "https://github.com/Kamasah-Dickson/Rest-Country-API",
		projectTitle: `Countries. Do you know your countries information?`,
		projectLink: `https://startling-crumble-ea6d3d.netlify.app/`,
	},
	// {
	// 	img: form,
	// 	imgAlt: `Forms`,
	// 	githubLink: "https://github.com/Kamasah-Dickson/React-redesigned-enigma",
	// 	projectTitle: `FormsUI. My first React Application.`,
	// 	projectLink: `https://capable-sable-35c3fa.netlify.app/`,
	// },
];
