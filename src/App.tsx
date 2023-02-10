import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import ContextProvider from "./context/ThemeContext";
import HireMe from "./components/HireMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
	return (
		<>
			<ContextProvider>
				<Home />
				<About />
				<HireMe />
				<Technologies />
				<Projects />
				<Contact />
				<Footer />
			</ContextProvider>
		</>
	);
}
