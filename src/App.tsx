import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import ContextProvider from "./context/ThemeContext";
import HireMe from "./components/HireMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<ContextProvider>
							<Home />
							<About />
							<HireMe />
							<Technologies />
							<Projects />
							<Contact />
							<Footer />
						</ContextProvider>
					}
				></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</Router>
	);
}
